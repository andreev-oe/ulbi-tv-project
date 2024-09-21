import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import Styles from './SideBar.module.scss';

interface ISideBarProps {
    className?: string;
}

export const SideBar = ({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames({
                rootClass: Styles.SideBar,
                conditionalClasses: { [Styles.collapsed]: collapsed },
                additionalClasses: [className],
            })}
        >
            <Button
                className={Styles.toggler}
                theme={ButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                type="button"
                size={ButtonSize.L}
                square
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={Styles.links}>
                <AppLink className={Styles.link} theme={AppLinkThemes.PRIMARY} to={RoutePath[AppRoutes.MAIN]}>
                    <HomeIcon className={Styles.icon} />
                    <span className={Styles.linkText}>{t('Главная')}</span>
                </AppLink>
                <AppLink className={Styles.link} theme={AppLinkThemes.PRIMARY} to={RoutePath[AppRoutes.ABOUT]}>
                    <ListIcon className={Styles.icon} />
                    <span className={Styles.linkText}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={Styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
