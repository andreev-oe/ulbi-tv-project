import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import i18n from 'shared/config/i18n/i18n';

import { profileFormDataSelector } from '../../selectors/profileFormDataSelector/profileFormDataSelector';
import { IProfile } from '../../types/types';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'login/updateProfileData',
    async (_, thunkAPI) => {
        const formData = profileFormDataSelector(thunkAPI.getState());
        try {
            const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
        }
    },
);
