import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StoryDecorator = (StoryComponent: Story) => {
    return (
        <div className="app">
            <StoryComponent />
        </div>
    );
};
