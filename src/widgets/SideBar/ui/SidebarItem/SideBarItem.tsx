import { memo } from 'react';

import { userAuthDataSelector } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';

import { ISidebarItem } from '../../model/types';

import Styles from './SideBarItem.module.scss';

interface ISideBarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: ISideBarItemProps) => {
    const isAuth = useSelector(userAuthDataSelector);

    const { t } = useTranslation();

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames({
                rootClass: Styles.link,
                conditionalClasses: { [Styles.collapsed]: collapsed },
            })}
            theme={AppLinkThemes.PRIMARY}
            to={item.path}
        >
            <item.Icon className={Styles.icon} />
            <span className={Styles.linkText}>{t(item.text)}</span>
        </AppLink>
    );
});

SideBarItem.displayName = 'SideBarItem';
