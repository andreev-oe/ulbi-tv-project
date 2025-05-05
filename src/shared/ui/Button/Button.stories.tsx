import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Button, EButtonSize, EButtonTheme } from './Button';

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
    theme: EButtonTheme.CLEAR,
};

export const Outline: ComponentStory<typeof Button> = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: EButtonTheme.OUTLINE,
};

export const OutlineDark: ComponentStory<typeof Button> = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: EButtonTheme.OUTLINE,
};
OutlineDark.decorators = [GlobalThemeDecorator(ETheme.DARK)];

export const SquareSizeS: ComponentStory<typeof Button> = Template.bind({});
SquareSizeS.args = {
    children: '>',
    square: true,
    size: EButtonSize.S,
    theme: EButtonTheme.BACKGROUND,
};

export const SquareSizeSInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeSInverted.args = {
    children: '>',
    square: true,
    size: EButtonSize.S,
    theme: EButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM: ComponentStory<typeof Button> = Template.bind({});
SquareSizeM.args = {
    children: '>',
    square: true,
    size: EButtonSize.M,
    theme: EButtonTheme.BACKGROUND,
};

export const SquareSizeMInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeMInverted.args = {
    children: '>',
    square: true,
    size: EButtonSize.M,
    theme: EButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeL: ComponentStory<typeof Button> = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: EButtonSize.L,
    theme: EButtonTheme.BACKGROUND,
};

export const SquareSizeLInverted: ComponentStory<typeof Button> = Template.bind({});
SquareSizeLInverted.args = {
    children: '>',
    square: true,
    size: EButtonSize.L,
    theme: EButtonTheme.BACKGROUND_INVERTED,
};

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
Disabled.args = {
    children: '>',
    square: true,
    size: EButtonSize.L,
    theme: EButtonTheme.OUTLINE,
    disabled: true,
};
