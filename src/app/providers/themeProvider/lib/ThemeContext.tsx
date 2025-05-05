import { createContext } from 'react';

import type { IThemeContextProps } from 'app/providers/themeProvider/lib/types';

export enum ETheme {
    LIGHT = 'app-light-theme',
    DARK = 'app-dark-theme',
    ORANGE = 'app-orange-theme',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<IThemeContextProps>({});
