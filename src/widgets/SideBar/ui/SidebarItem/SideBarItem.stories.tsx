import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { SideBarItem } from './SideBarItem';

export default {
    title: 'widget/SideBarItem',
    component: SideBarItem,
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => <SideBarItem {...args} />;

export const Light: ComponentStory<typeof SideBarItem> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof SideBarItem> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
