import type { Story } from '@storybook/react';
import type { ETheme } from 'app/providers/themeProvider';
import { ThemeProvider } from 'app/providers/themeProvider';

export const GlobalThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => {
    document.body.className = theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
