import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { IArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

export const commentsAdapter = createEntityAdapter<IComment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
