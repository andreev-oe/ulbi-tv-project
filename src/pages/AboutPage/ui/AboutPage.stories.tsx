import React, { Suspense } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { AboutPage } from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light: ComponentStory<typeof AboutPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof AboutPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
