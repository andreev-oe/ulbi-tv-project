import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTextBlock } from './ArticleTextBlock';

export default {
    title: 'ArticleTextBlock/ArticleTextBlock',
    component: ArticleTextBlock,
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Default: ComponentStory<typeof ArticleTextBlock> = Template.bind({});
Default.args = {};
