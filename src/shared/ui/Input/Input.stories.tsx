import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light: ComponentStory<typeof Input> = Template.bind({});
Light.args = {
    autofocus: true,
    value: 'Логин',
    label: 'Введите логин',
};

export const Dark: ComponentStory<typeof Input> = Template.bind({});
Dark.args = {
    autofocus: true,
    value: 'Логин',
    label: 'Введите логин',
};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
