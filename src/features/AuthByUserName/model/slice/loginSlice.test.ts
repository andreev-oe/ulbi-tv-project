import { ILoginSchema } from '../..';

import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('Устанавливает username', () => {
        const state: TDeepPartial<ILoginSchema> = { username: 'username' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('username'))).toEqual({
            username: 'username',
        });
    });
    test('Устанавливает password', () => {
        const state: TDeepPartial<ILoginSchema> = { password: 'password' };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('password'))).toEqual({
            password: 'password',
        });
    });
});
