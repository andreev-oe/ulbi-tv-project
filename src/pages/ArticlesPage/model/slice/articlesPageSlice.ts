import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EArticlesView, IArticle } from 'entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { IArticlesPageSchema } from '../types/articlePage';

export const articlesPageAdapter = createEntityAdapter<IArticle>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
});

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesPageAdapter.getInitialState<IArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: EArticlesView.TILED,
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticlesView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initiateState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as EArticlesView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                articlesPageAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { reducer: articlesPageReducer, actions: articlesPageAtions } = articlesPageSlice;
