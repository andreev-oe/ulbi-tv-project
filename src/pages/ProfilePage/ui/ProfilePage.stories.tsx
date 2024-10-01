import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { ProfilePage } from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light: ComponentStory<typeof ProfilePage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof ProfilePage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
