import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import i18n from 'shared/config/i18n/i18n';

import { IArticle } from '../../types/articleTypes';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle>(`/articles/${articleId}`);

            if (!response.data) {
                return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
        }
    },
);
