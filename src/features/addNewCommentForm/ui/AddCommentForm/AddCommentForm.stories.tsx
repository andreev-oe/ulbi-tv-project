import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddCommentForm } from './AddCommentForm';

export default {
    title: 'AddCommentForm/AddCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Default: ComponentStory<typeof AddCommentForm> = Template.bind({});
Default.args = {};
