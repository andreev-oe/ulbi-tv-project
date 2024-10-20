import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleEditPage } from './ArticleEditPage';

export default {
    title: 'ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Default: ComponentStory<typeof ArticleEditPage> = Template.bind({});
Default.args = {};
