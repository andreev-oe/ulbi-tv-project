import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light: ComponentStory<typeof Loader> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof Loader> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
