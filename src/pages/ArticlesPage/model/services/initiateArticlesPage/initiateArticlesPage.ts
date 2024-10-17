import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { EArticlesSortField } from 'entities/Article';
import { TSortOrder } from 'shared/types';

import { articlesPageIsInitializedSelector } from '../../selectors/articlePage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initiateArticlesPage = createAsyncThunk<void, URLSearchParams, IThunkConfig<string>>(
    'articlesPage/initiateArticlesPage',
    async (searchParams, thunkAPI) => {
        const isInitialized = articlesPageIsInitializedSelector(thunkAPI.getState());

        if (!isInitialized) {
            const orderFromUrl = searchParams.get('order') as TSortOrder;
            const sortFromUrl = searchParams.get('sort') as EArticlesSortField;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                thunkAPI.dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            thunkAPI.dispatch(articlesPageActions.initiateState());
            thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
