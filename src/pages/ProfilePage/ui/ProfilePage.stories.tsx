import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import avatar from 'shared/assets/tests/defaultAvatar.jpg';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { ReduxStoreDecorator } from 'shared/config/storybook/decorators/ReduxStoreDecorator';

import { ProfilePage } from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const data = {
    username: 'John Doe',
    country: ECountry.Armenia,
    first: 'John',
    lastname: 'Doe',
    currency: ECurrency.USD,
    age: 25,
    city: 'Yerevan',
    avatar: avatar,
};

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light: ComponentStory<typeof ProfilePage> = Template.bind({});
Light.decorators = [
    ReduxStoreDecorator({
        profile: {
            formData: data,
            data: data,
        },
    }),
];

export const Dark: ComponentStory<typeof ProfilePage> = Template.bind({});
Dark.decorators = [
    GlobalThemeDecorator(ETheme.DARK),
    ReduxStoreDecorator({
        profile: {
            formData: data,
            data: data,
        },
    }),
];
