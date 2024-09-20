import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light: ComponentStory<typeof PageError> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof PageError> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
