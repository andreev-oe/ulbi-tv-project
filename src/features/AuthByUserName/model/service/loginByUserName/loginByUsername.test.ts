import { Dispatch } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';
import axios from 'axios';
import { userActions } from 'entities/User';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => IStateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('Запрос выполнен успешно', async () => {
        const userData = { username: 'username', id: 'id' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const actions = loginByUsername({ username: 'username', password: 'password' });
        const result = await actions(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('Запрос выполнен, ответ код 403', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const actions = loginByUsername({ username: 'username', password: 'password' });
        const result = await actions(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Вы ввели неправильный логин или пароль');
    });
});
