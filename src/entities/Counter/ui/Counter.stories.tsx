import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';
import { Loader } from 'shared/ui/Loader/Loader';

import { Counter } from './Counter';

export default {
    title: 'entities/Counter',
    component: Counter,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Light: ComponentStory<typeof Counter> = Template.bind({});
Light.args = {};

export const Dark: ComponentStory<typeof Counter> = Template.bind({});
Dark.args = {};
Dark.decorators = [GlobalThemeDecorator(Theme.DARK)];
