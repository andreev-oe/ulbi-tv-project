import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/User/model/types/userSchema';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
