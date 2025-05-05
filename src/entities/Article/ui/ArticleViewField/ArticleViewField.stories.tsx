import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewField } from './ArticleViewField';

export default {
    title: 'entities/Article/ArticleViewField',
    component: ArticleViewField,
} as ComponentMeta<typeof ArticleViewField>;

const Template: ComponentStory<typeof ArticleViewField> = (args) => <ArticleViewField {...args} />;

export const Default: ComponentStory<typeof ArticleViewField> = Template.bind({});
Default.args = {};
