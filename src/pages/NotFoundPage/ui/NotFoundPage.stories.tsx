import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light: ComponentStory<typeof NotFoundPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof NotFoundPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
