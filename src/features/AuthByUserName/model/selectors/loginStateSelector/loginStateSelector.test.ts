import type { IStateSchema } from 'app/providers/ReduxStore';

import { loginStateSelector } from './loginStateSelector';

describe('loginStateSelector.test', () => {
    test('Возвращает объект состояния', () => {
        const state: TDeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: true,
                error: 'error',
            },
        };
        expect(loginStateSelector(state as IStateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: true,
            error: 'error',
        });
    });
    test('Возвращает объект состояния при пустом объекте', () => {
        const state: TDeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginStateSelector(state as IStateSchema)).toEqual({});
    });
});
