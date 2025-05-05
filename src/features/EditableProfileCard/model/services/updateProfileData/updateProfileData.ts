import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/ReduxStore';

import { EValidateProfileError } from '../../consts/enums';
import { profileFormDataSelector } from '../../selectors/profileFormDataSelector/profileFormDataSelector';
import type { IProfile } from '../../types/types';
import { validateProfileForm } from '../validateProfileForm/validateProfileForm';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<EValidateProfileError[]>>(
    'login/updateProfileData',
    async (_, thunkAPI) => {
        const formData = profileFormDataSelector(thunkAPI.getState());
        try {
            const response = await thunkAPI.extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                return thunkAPI.rejectWithValue([EValidateProfileError.NO_DATA]);
            }

            const errors = validateProfileForm(formData);

            if (errors?.length) {
                return thunkAPI.rejectWithValue(errors);
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue([EValidateProfileError.SERVER_ERROR]);
        }
    },
);
