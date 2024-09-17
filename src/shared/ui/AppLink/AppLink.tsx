import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkThemes.PRIMARY,
    ...rest
    }) => {

    return (
        <Link
            to={to}
            className={classNames({rootClass: classes.AppLink, additionalClasses: [className, classes[theme]]})}
            {...rest}
        >
            {children}
        </Link>
    )
};
