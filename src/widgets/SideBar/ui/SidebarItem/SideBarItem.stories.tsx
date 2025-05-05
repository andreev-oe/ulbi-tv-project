import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import HomeIcon from 'shared/assets/icons/home.svg';
import { EAppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { SideBarItem } from './SideBarItem';

export default {
    title: 'widget/SideBarItem',
    component: SideBarItem,
    args: {
        collapsed: false,
        item: {
            path: RoutePath[EAppRoutes.MAIN],
            text: 'text',
            Icon: HomeIcon,
        },
    },
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => <SideBarItem {...args} />;

export const Light: ComponentStory<typeof SideBarItem> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof SideBarItem> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
