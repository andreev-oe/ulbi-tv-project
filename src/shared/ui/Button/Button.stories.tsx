import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
};

export const Outline: ComponentStory<typeof Button> = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark: ComponentStory<typeof Button> = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const SquareSizeS: ComponentStory<typeof Button> = Template.bind({});
SquareSizeS.args = {
    children: '>',
    square: true,
    size: ButtonSize.S,
    theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeSInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeSInverted.args = {
    children: '>',
    square: true,
    size: ButtonSize.S,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM: ComponentStory<typeof Button> = Template.bind({});
SquareSizeM.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeMInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeMInverted.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeL: ComponentStory<typeof Button> = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeLInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeLInverted.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
