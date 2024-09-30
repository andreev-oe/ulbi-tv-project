import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { loginPasswordSelector } from './loginPasswordSelector';

describe('loginPasswordSelector.test', () => {
    test('Возвращает пароль', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(loginPasswordSelector(state as IStateSchema)).toBe('password');
    });
    test('Возвращает пустую строку при отсутствии пароля', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginPasswordSelector(state as IStateSchema)).toBe('');
    });
});
