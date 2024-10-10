import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { EAppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { AppLink, AppLinkThemes } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: RoutePath[EAppRoutes.MAIN],
    },
    argTypes: {
        theme: { control: 'select', options: Object.values(AppLinkThemes) },
        children: { control: 'text' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary: ComponentStory<typeof AppLink> = Template.bind({});
Primary.args = {
    theme: AppLinkThemes.PRIMARY,
    children: 'Light',
};

export const PrimaryDark: ComponentStory<typeof AppLink> = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkThemes.PRIMARY,
    children: 'Dark',
};
PrimaryDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const Secondary: ComponentStory<typeof AppLink> = Template.bind({});
Secondary.args = {
    theme: AppLinkThemes.SECONDARY,
    children: 'Light',
};

export const SecondaryDark: ComponentStory<typeof AppLink> = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkThemes.SECONDARY,
    children: 'Dark',
};
SecondaryDark.decorators = [GlobalThemeDecorator(Theme.DARK)];
