import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoryDecorator } from 'shared/config/storybook/decorators/StyleDecorator';

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
addDecorator(ReduxStoreDecorator({ counter: { value: 10 } }));
addDecorator(GlobalThemeDecorator(Theme.LIGHT));
