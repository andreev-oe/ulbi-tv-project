import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';

import { IArticleDetailsSchema } from '../types/articleDetailsSchema';
import { IArticle } from '../types/articleTypes';

const initialState: IArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        // update: (state, action: PayloadAction<IArticle>) => {
        //     state.data = { ...state.data, ...action.payload };
        // },
        // revert: (state) => {
        //     state.validationErrors = undefined;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
