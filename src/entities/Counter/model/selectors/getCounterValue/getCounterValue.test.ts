import { DeepPartial } from '@reduxjs/toolkit';
import { ICounterStateSchema } from 'app/providers/ReduxStore';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Возвращает значение счетчика', () => {
        const state: DeepPartial<ICounterStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as ICounterStateSchema)).toEqual(10);
    });
});
