import { useContext, useEffect } from 'react';

import { defaultTheme } from '../ui/ThemeProvider';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    toggleTheme?: () => void;
    theme?: string;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    return { theme: theme ?? Theme.LIGHT, toggleTheme };
};
