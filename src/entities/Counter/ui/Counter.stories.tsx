import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Counter } from './Counter';

export default {
    title: 'widget/Counter',
    component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Light: ComponentStory<typeof Counter> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof Counter> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
