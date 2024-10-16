import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageAtions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

import { articlesPageIsInitializedSelector } from '../../selectors/articlePage';

export const initiateArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'articlesPage/initiateArticlesPage',
    async (_, thunkAPI) => {
        const isInitialized = articlesPageIsInitializedSelector(thunkAPI.getState());

        if (!isInitialized) {
            thunkAPI.dispatch(articlesPageAtions.initiateState());
            thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
