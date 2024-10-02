import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IProfile } from 'entities/Profile';
import i18n from 'shared/config/i18n/i18n';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'login/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IProfile>('/profile');

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
        }
    },
);
