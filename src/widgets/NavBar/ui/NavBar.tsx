import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import classes from './NavBar.module.scss';

interface INavBarProps {
    className?: string;
}

export const NavBar = (props: INavBarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: classes.NavBar, additionalClasses: [className] })}>
            <div className={classes.links}>
                <AppLink theme={AppLinkThemes.PRIMARY} to={RoutePath[AppRoutes.MAIN]}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkThemes.PRIMARY} to={RoutePath[AppRoutes.ABOUT]}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
