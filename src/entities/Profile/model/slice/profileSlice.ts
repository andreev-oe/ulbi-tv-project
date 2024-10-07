import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfile, IProfileSchema } from '../../model/types/types';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: IProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.data;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
