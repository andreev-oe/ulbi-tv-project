import type { IStateSchema } from 'app/providers/ReduxStore';

import { loginErrorSelector } from './loginErrorSelector';

describe('loginErrorSelector.test', () => {
    test('Возвращает ошибку', () => {
        const state: TDeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(loginErrorSelector(state as IStateSchema)).toBe('error');
    });
    test('Возвращает пустую строку при отсутствии ошибки', () => {
        const state: TDeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginErrorSelector(state as IStateSchema)).toBe('');
    });
});
