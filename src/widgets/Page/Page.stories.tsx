import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default: ComponentStory<typeof Page> = Template.bind({});
Default.args = {};
