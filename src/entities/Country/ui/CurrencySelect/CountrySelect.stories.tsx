import React, { Suspense } from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from 'shared/ui/Loader/Loader';

import { CountrySelect } from './CountrySelect';

export default {
    title: 'entity/CountrySelect',
    component: CountrySelect,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = () => <CountrySelect />;

export const Light: ComponentStory<typeof CountrySelect> = Template.bind({});
Light.args = {};
