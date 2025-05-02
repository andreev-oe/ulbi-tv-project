import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';
import { EArticlesSortField, EArticlesView, EArticleType, IArticle } from 'entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { TSortOrder } from 'shared/types';

import { IArticlesPageSchema } from '../..';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

export const articlesPageAdapter = createEntityAdapter<IArticle>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
});

export const articlesPageSelector = articlesPageAdapter.getSelectors<IStateSchema>((state) => {
    return state.articlesPage || articlesPageAdapter.getInitialState();
});

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesPageAdapter.getInitialState<IArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: EArticlesView.TILED,
        page: 1,
        limit: 10,
        hasMore: true,
        order: 'asc',
        sort: EArticlesSortField.CREATED_AT,
        search: '',
        type: EArticleType.ALL,
        _isInitialized: false,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setView: (state, action: PayloadAction<EArticlesView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initiateState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as EArticlesView;
            state.view = view;
            state._isInitialized = true;
            state.limit = view === EArticlesView.LIST ? 5 : 18;
        },
        setOrder: (state, action: PayloadAction<TSortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<EArticlesSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<EArticleType>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.setMany(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
