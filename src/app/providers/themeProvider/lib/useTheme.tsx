import { useContext, useEffect } from 'react';

import { defaultTheme } from '../ui/ThemeProvider';

import { LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    toggleTheme?: () => void;
    theme?: string;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ETheme;
        switch (theme) {
            case ETheme.DARK:
                newTheme = ETheme.LIGHT;
                break;
            case ETheme.LIGHT:
                newTheme = ETheme.ORANGE;
                break;
            case ETheme.ORANGE:
                newTheme = ETheme.DARK;
                break;
            default:
                newTheme = ETheme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    return { theme: theme ?? ETheme.LIGHT, toggleTheme };
};
