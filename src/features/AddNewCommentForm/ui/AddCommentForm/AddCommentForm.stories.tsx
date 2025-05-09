import React from 'react';

import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';

import { AddCommentForm } from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [ReduxStoreDecorator({})];
