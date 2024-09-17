import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NavBar.module.scss'
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;

    return (
        <div className={classNames({rootClass: classes.NavBar, additionalClasses: [className]})}>
            <ThemeSwitcher />
            <div className={classes.links}>
                <AppLink theme={AppLinkThemes.PRIMARY} to="/">Главная</AppLink>
                <AppLink theme={AppLinkThemes.PRIMARY} to="/about">О сайте</AppLink>
            </div>
        </div>
    )
};
