import type { ETheme } from 'app/providers/themeProvider';

export interface IThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}
