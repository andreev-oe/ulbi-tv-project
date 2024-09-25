import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Возвращает значение счетчика', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
