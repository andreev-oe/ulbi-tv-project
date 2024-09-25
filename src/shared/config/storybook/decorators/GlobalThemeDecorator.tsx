import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

export const GlobalThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.className = theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
