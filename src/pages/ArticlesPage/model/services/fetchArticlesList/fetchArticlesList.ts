import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IArticle } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

export const fetchArticlesList = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка запроса'));
        }
    },
);
