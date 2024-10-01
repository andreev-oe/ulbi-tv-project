import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';

import { ISidebarItem } from '../../model/types';

import Styles from './SideBarItem.module.scss';

interface ISideBarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: ISideBarItemProps) => {
    const { t } = useTranslation();

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
