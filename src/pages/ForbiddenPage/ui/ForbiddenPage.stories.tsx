import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { ForbiddenPage } from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Light: ComponentStory<typeof ForbiddenPage> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof ForbiddenPage> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
