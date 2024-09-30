import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { loginErrorSelector } from './loginErrorSelector';

describe('loginErrorSelector.test', () => {
    test('Возвращает ошибку', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(loginErrorSelector(state as IStateSchema)).toBe('error');
    });
    test('Возвращает пустую строку при отсутствии ошибки', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginErrorSelector(state as IStateSchema)).toBe('');
    });
});
