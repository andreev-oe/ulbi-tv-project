import { IStateSchema } from 'app/providers/ReduxStore';

import { userAuthDataSelector } from './userAuthDataSelector';

describe('getUserAuthData.test', () => {
    test('Возвращает данные пользователя', () => {
        const state: TDeepPartial<IStateSchema> = {
            user: {
                authData: {
                    username: 'username',
                    id: 'id',
                },
            },
        };
        expect(userAuthDataSelector(state as IStateSchema)).toEqual({
            username: 'username',
            id: 'id',
        });
    });
    test('Возвращает данные при пустом объекте', () => {
        const state: TDeepPartial<IStateSchema> = {
            user: {
                authData: undefined,
            },
        };
        expect(userAuthDataSelector(state as IStateSchema)).toEqual(undefined);
    });
});
