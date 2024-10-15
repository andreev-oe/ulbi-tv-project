import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IArticle } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

import { articlesPageLimitSelector } from '../../selectors/articlePage';

interface IFetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps, IThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { page = 1 } = props;
        const limit = articlesPageLimitSelector(thunkAPI.getState());
        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
