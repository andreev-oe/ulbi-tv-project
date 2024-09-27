import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'entities/User';

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
                return thunkAPI.rejectWithValue('Invalid response');
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
