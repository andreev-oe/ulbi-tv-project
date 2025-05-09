import 'app/styles/index.scss';
import type { Story } from '@storybook/react';

export const StoryDecorator = (StoryComponent: Story) => {
    return (
        <div className="app">
            <StoryComponent />
        </div>
    );
};
