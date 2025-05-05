import React, { Suspense } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { MainPage } from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light: ComponentStory<typeof MainPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof MainPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
