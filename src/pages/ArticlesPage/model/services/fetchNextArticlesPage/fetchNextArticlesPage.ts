import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

import {
    articlesPageHasMoreSelector,
    articlesPageIsLoadingSelector,
    articlesPagePageSelector,
} from '../../selectors/articlePage';

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
