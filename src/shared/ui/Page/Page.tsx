import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

import Styles from './Page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: IPageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ callBack: onScrollEnd, triggerRef: triggerRef, wrapperRef: wrapperRef });

    return (
        <div ref={wrapperRef} className={classNames({ rootClass: Styles.Page, additionalClasses: [className] })}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
});
