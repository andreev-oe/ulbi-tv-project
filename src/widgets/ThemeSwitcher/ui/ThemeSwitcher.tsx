import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/themeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames({ rootClass: '', additionalClasses: [className] })}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
