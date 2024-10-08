import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from 'shared/ui/Loader/Loader';

import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entity/CurrencySelect',
    component: CurrencySelect,
    decorators: [
        (Story) => (
            <Suspense fallback={<Loader />}>
                <Story />
            </Suspense>
        ),
    ],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = () => <CurrencySelect />;

export const Light: ComponentStory<typeof CurrencySelect> = Template.bind({});
Light.args = {};
