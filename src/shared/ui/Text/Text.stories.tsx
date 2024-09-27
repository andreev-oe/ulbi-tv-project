import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { ETextTheme, Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary: ComponentStory<typeof Text> = Template.bind({});
Primary.args = {
    title: 'Text Title',
    text: 'Text Text',
};

export const Error: ComponentStory<typeof Text> = Template.bind({});
Error.args = {
    title: 'Text Title',
    text: 'Text Text',
    theme: ETextTheme.ERROR,
};

export const ErrorDark: ComponentStory<typeof Text> = Template.bind({});
ErrorDark.args = {
    title: 'Text Title',
    text: 'Text Text',
    theme: ETextTheme.ERROR,
};
ErrorDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const PrimaryDark: ComponentStory<typeof Text> = Template.bind({});
PrimaryDark.args = {
    title: 'Text Title',
    text: 'Text Text',
};
PrimaryDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const onlyTitle: ComponentStory<typeof Text> = Template.bind({});
onlyTitle.args = {
    title: 'Text Title',
};

export const onlyTitleDark: ComponentStory<typeof Text> = Template.bind({});
onlyTitleDark.args = {
    title: 'Text Title',
};
onlyTitleDark.decorators = [GlobalThemeDecorator(Theme.DARK)];

export const onlyText: ComponentStory<typeof Text> = Template.bind({});
onlyText.args = {
    text: 'Text Text',
};

export const onlyTextDark: ComponentStory<typeof Text> = Template.bind({});
onlyTextDark.args = {
    text: 'Text Text',
};
onlyTextDark.decorators = [GlobalThemeDecorator(Theme.DARK)];
