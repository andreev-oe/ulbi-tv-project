import type { IStateSchema } from 'app/providers/ReduxStore';

import { getCounterState } from './getCounterState';

describe('getCounter', () => {
    test('Возвращает стейт счетчика', () => {
        const state: TDeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterState(state as IStateSchema)).toEqual({ value: 10 });
    });
});
