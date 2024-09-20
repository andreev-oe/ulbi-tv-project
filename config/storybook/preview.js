import { addDecorator } from '@storybook/react';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoryDecorator } from 'shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(StoryDecorator);
addDecorator(RouterDecorator);
addDecorator(GlobalThemeDecorator(Theme.LIGHT));
