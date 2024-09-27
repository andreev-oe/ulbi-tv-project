import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

interface ILoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
        }
    },
);
