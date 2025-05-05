import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import avatar from 'shared/assets/tests/defaultAvatar.jpg';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { StoryDecorator } from 'shared/config/storybook/decorators/StyleDecorator';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default: ComponentStory<typeof ProfileCard> = Template.bind({});
Default.args = {
    data: {
        username: 'John Doe',
        country: ECountry.Armenia,
        first: 'John',
        lastname: 'Doe',
        currency: ECurrency.USD,
        age: 25,
        city: 'Yerevan',
        avatar: avatar,
    },
};

export const DefaultDark: ComponentStory<typeof ProfileCard> = Template.bind({});
DefaultDark.args = {
    data: {
        username: 'John Doe',
        country: ECountry.Armenia,
        first: 'John',
        lastname: 'Doe',
        currency: ECurrency.USD,
        age: 25,
        city: 'Yerevan',
        avatar: avatar,
    },
};
DefaultDark.decorators = [GlobalThemeDecorator(ETheme.DARK), StoryDecorator];

export const Loading: ComponentStory<typeof ProfileCard> = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError: ComponentStory<typeof ProfileCard> = Template.bind({});
WithError.args = {
    error: 'true',
};
