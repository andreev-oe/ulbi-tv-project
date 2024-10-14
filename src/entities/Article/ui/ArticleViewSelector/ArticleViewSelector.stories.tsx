import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'ArticleViewSelector/ArticleViewSelector',
    component: ArticleViewSelector,
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Default: ComponentStory<typeof ArticleViewSelector> = Template.bind({});
Default.args = {};
