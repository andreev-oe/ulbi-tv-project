import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from 'features/AuthByUserName';

import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('Устанавливает username', () => {
        const state: DeepPartial<ILoginSchema> = { username: 'username' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('username'))).toEqual({
            username: 'username',
        });
    });
    test('Устанавливает password', () => {
        const state: DeepPartial<ILoginSchema> = { password: 'password' };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('password'))).toEqual({
            password: 'password',
        });
    });
});
