import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { MainPage } from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light: ComponentStory<typeof MainPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof MainPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
