import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { SideBar } from './SideBar';

export default {
    title: 'widget/SideBar',
    component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light: ComponentStory<typeof SideBar> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof SideBar> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
