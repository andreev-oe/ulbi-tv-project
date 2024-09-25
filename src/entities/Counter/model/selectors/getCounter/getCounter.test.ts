import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { getCounterState } from './getCounterState';

describe('getCounter', () => {
    test('Возвращает стейт счетчика', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterState(state as IStateSchema)).toEqual({ value: 10 });
    });
});
