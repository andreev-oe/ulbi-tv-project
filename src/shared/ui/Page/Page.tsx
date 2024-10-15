import { memo, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo(({ className, children }: IPageProps) => {
    return <div className={classNames({ rootClass: Styles.Page, additionalClasses: [className] })}>{children}</div>;
});
