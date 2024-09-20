import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { NavBar } from './NavBar';

export default {
    title: 'widget/NavBar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light: ComponentStory<typeof NavBar> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof NavBar> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
