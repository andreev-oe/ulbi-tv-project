import type { IStateSchema } from 'app/providers/ReduxStore';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Возвращает значение счетчика', () => {
        const state: TDeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
