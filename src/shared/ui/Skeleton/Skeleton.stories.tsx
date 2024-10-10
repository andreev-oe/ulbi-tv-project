import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default: ComponentStory<typeof Skeleton> = Template.bind({});
Default.args = {
    width: '100%',
    height: '200px',
};

export const DefaultDark: ComponentStory<typeof Skeleton> = Template.bind({});
DefaultDark.args = {
    width: '100%',
    height: '200px',
};
DefaultDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const DefaultOrange: ComponentStory<typeof Skeleton> = Template.bind({});
DefaultOrange.args = {
    width: '100%',
    height: '200px',
};
DefaultOrange.decorators = [GlobalThemeDecorator(Theme.ORANGE)];

export const Circle: ComponentStory<typeof Skeleton> = Template.bind({});
Circle.args = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
};

export const CircleDark: ComponentStory<typeof Skeleton> = Template.bind({});
CircleDark.args = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
};
CircleDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const CircleOrange: ComponentStory<typeof Skeleton> = Template.bind({});
CircleOrange.args = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
};
CircleOrange.decorators = [GlobalThemeDecorator(Theme.ORANGE)];
