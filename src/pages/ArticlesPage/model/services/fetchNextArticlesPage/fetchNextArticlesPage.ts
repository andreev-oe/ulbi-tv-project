import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/ReduxStore';

import {
    articlesPageHasMoreSelector,
    articlesPageIsLoadingSelector,
    articlesPagePageSelector,
} from '../../selectors/articlePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const hasMore = articlesPageHasMoreSelector(thunkAPI.getState());
        const page = articlesPagePageSelector(thunkAPI.getState());
        const isLoading = articlesPageIsLoadingSelector(thunkAPI.getState());

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
            thunkAPI.dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
