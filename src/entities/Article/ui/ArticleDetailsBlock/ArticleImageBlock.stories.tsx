import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleImageBlock } from './ArticleImageBlock';

export default {
    title: 'ArticleImageBlock/ArticleImageBlock',
    component: ArticleImageBlock,
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Default: ComponentStory<typeof ArticleImageBlock> = Template.bind({});
Default.args = {};
