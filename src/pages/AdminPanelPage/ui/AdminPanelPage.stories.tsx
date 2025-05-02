import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { AdminPanelPage } from './AdminPanelPage';

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Light: ComponentStory<typeof AdminPanelPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof AdminPanelPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
