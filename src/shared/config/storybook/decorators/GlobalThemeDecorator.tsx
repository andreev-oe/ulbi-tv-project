import { Story } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';

export const GlobalThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
