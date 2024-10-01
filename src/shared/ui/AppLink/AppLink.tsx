import { memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './AppLink.module.scss';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink = memo(({ className, children, to, theme = AppLinkThemes.PRIMARY, ...rest }: IAppLinkProps) => (
    <Link
        to={to}
        className={classNames({ rootClass: Styles.AppLink, additionalClasses: [className, Styles[theme]] })}
        {...rest}
    >
        {children}
    </Link>
));

AppLink.displayName = 'AppLink';
