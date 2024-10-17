import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesSortField } from './ArticlesSortField';

export default {
    title: 'ArticlesSortField/ArticlesSortField',
    component: ArticlesSortField,
} as ComponentMeta<typeof ArticlesSortField>;

const Template: ComponentStory<typeof ArticlesSortField> = (args) => <ArticlesSortField {...args} />;

export const Default: ComponentStory<typeof ArticlesSortField> = Template.bind({});
Default.args = {};
