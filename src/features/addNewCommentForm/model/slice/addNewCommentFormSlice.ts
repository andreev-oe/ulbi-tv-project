import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAddNewCommentFormSchema } from '../types/addNewCommentFormSchema';

const initialState: IAddNewCommentFormSchema = {
    error: '',
    text: '',
};

export const addNewCommentFormSlice = createSlice({
    name: 'addNewCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addNewCommentFormActions } = addNewCommentFormSlice;
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice;
