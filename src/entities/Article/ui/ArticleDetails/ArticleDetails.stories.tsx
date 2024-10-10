import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'ArticleDetails/ArticleDetails',
    component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Default: ComponentStory<typeof ArticleDetails> = Template.bind({});
Default.args = {};
