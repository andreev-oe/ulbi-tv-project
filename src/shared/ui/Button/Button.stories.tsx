import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear: ComponentStory<typeof Button> = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};

export const Outline: ComponentStory<typeof Button> = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark: ComponentStory<typeof Button> = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [GlobalThemeDecorator(Theme.DARK)];
