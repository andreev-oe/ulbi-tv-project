import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';

import { SideBar } from './SideBar';

export default {
    title: 'widget/SideBar',
    component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light: ComponentStory<typeof SideBar> = Template.bind({});
Light.args = {};
Light.decorators = [
    ReduxStoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark: ComponentStory<typeof SideBar> = Template.bind({});
Dark.args = {};
Dark.decorators = [
    GlobalThemeDecorator(ETheme.DARK),
    ReduxStoreDecorator({
        user: { authData: {} },
    }),
];

export const NoAuth: ComponentStory<typeof SideBar> = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    ReduxStoreDecorator({
        user: {},
    }),
];
