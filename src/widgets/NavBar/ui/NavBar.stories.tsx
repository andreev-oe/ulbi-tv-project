import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';

import { NavBar } from './NavBar';

export default {
    title: 'widget/NavBar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light: ComponentStory<typeof NavBar> = Template.bind({});
Light.args = {};

export const LogOut: ComponentStory<typeof NavBar> = Template.bind({});
LogOut.args = {};
LogOut.decorators = [ReduxStoreDecorator({ user: { authData: { username: 'test', id: '1' } } })];

export const Dark: ComponentStory<typeof NavBar> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
