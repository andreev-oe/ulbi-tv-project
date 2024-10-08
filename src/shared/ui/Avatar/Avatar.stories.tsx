import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';
import defaultAvatar from './defaultAvatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultSize: ComponentStory<typeof Avatar> = Template.bind({});
DefaultSize.args = {
    size: 100,
    src: defaultAvatar,
};

export const Small: ComponentStory<typeof Avatar> = Template.bind({});
Small.args = {
    size: 50,
    src: defaultAvatar,
};
