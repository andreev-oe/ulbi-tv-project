import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light: ComponentStory<typeof LoginModal> = Template.bind({});
Light.args = {
    isOpen: true,
};

export const Dark: ComponentStory<typeof LoginModal> = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
