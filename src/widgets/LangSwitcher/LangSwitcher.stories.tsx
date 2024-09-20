import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Light: ComponentStory<typeof LangSwitcher> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof LangSwitcher> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
