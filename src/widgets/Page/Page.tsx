import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';

import { IStateSchema } from 'app/providers/ReduxStore';
import { scrollPositionActions, scrollPositionByPath } from 'features/ScrollPosition';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

import Styles from './Page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: IPageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: IStateSchema) => scrollPositionByPath(state, pathname));

    const onScroll = useThrottle((evt: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollPositionActions.setScrollPosition({
                position: evt.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 300);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({ callBack: onScrollEnd, triggerRef: triggerRef, wrapperRef: wrapperRef });

    return (
        <div
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames({ rootClass: Styles.Page, additionalClasses: [className] })}
        >
            {children}
            {onScrollEnd && <div className={Styles.trigger} ref={triggerRef} />}
        </div>
    );
});
