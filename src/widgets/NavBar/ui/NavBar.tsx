import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export enum Routes {
    MAIN = '/',
    ABOUT = '/about',
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: classes.NavBar, additionalClasses: [className] })}>
            <div className={classes.links}>
                <AppLink theme={AppLinkThemes.PRIMARY} to={Routes.MAIN}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkThemes.PRIMARY} to={Routes.ABOUT}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
