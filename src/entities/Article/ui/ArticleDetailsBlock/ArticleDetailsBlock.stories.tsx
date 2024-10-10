import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetailsBlock } from './ArticleDetailsBlock';

export default {
    title: 'ArticleDetailsBlock/ArticleDetailsBlock',
    component: ArticleDetailsBlock,
} as ComponentMeta<typeof ArticleDetailsBlock>;

const Template: ComponentStory<typeof ArticleDetailsBlock> = (args) => <ArticleDetailsBlock {...args} />;

export const Default: ComponentStory<typeof ArticleDetailsBlock> = Template.bind({});
Default.args = {};
