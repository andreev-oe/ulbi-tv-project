import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { loginIsLoadingSelector } from './loginIsLoadingSelector';

describe('loginIsLoadingSelector.test', () => {
    test('Возвращает состояние загрузки', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(loginIsLoadingSelector(state as IStateSchema)).toBe(true);
    });
    test('Возвращает false при отсутствии ошибки', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {},
        };
        expect(loginIsLoadingSelector(state as IStateSchema)).toBe(false);
    });
});
