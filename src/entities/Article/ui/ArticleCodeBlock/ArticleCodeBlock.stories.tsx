import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
    title: 'ArticleCodeBlock/ArticleCodeBlock',
    component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Default: ComponentStory<typeof ArticleCodeBlock> = Template.bind({});
Default.args = {};
