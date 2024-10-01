import { memo } from 'react';

import { Theme, useTheme } from 'app/providers/themeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames({ rootClass: '', additionalClasses: [className] })}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
