import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IProfile } from 'entities/Profile';
import i18n from 'shared/config/i18n/i18n';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
    'login/fetchProfileData',
    async (profileId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IProfile>(`/profile/${profileId}`);

            if (!response.data) {
                return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
        }
    },
);
