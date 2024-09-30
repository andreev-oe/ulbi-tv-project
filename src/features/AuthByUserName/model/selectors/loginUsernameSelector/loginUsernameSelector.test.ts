import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { loginUsernameSelector } from './loginUsernameSelector';

describe('loginUsernameSelector.test', () => {
    test('Возвращает имя пользователя', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(loginUsernameSelector(state as IStateSchema)).toBe('username');
    });
    test('Возвращает пустую строку при отсутствии имени пользователя', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginUsernameSelector(state as IStateSchema)).toBe('');
    });
});
