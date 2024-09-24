import { DeepPartial } from '@reduxjs/toolkit';
import { ICounterStateSchema } from 'app/providers/ReduxStore';

import { getCounterState } from './getCounterState';

describe('getCounter', () => {
    test('Возвращает стейт счетчика', () => {
        const state: DeepPartial<ICounterStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterState(state as ICounterStateSchema)).toEqual({ value: 10 });
    });
});
