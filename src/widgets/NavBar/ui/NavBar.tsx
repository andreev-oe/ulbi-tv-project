import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss'
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames({rootClass: classes.NavBar, additionalClasses: [className]})}>
            <div className={classes.links}>
                <AppLink theme={AppLinkThemes.PRIMARY} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkThemes.PRIMARY} to="/about">{t('О нас')}</AppLink>
            </div>
        </div>
    )
};
