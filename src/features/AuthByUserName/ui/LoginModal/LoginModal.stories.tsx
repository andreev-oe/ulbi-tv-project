import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';

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

export const withError: ComponentStory<typeof LoginModal> = Template.bind({});
withError.args = {
    isOpen: true,
};
withError.decorators = [
    ReduxStoreDecorator({ loginForm: { username: 'test', password: 'test', error: 'Error', isLoading: false } }),
];

export const Loading: ComponentStory<typeof LoginModal> = Template.bind({});
Loading.args = {
    isOpen: true,
};
Loading.decorators = [ReduxStoreDecorator({ loginForm: { username: 'test', password: 'test', isLoading: true } })];

export const Dark: ComponentStory<typeof LoginModal> = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
