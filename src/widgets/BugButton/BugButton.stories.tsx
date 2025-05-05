import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { BugButton } from './BugButton';

export default {
    title: 'widget/BugButton',
    component: BugButton,
} as ComponentMeta<typeof BugButton>;

const Template: ComponentStory<typeof BugButton> = () => <BugButton />;

export const Light: ComponentStory<typeof BugButton> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof BugButton> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
