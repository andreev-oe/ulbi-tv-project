import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IArticle } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

import {
    articlesPageLimitSelector,
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
} from '../../selectors/articlePage';

interface IFetchArticlesListProps {
    page?: number;
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps, IThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { page = 1 } = props;
        const limit = articlesPageLimitSelector(thunkAPI.getState());
        const sort = articlesPageSortSelector(thunkAPI.getState());
        const order = articlesPageOrderSelector(thunkAPI.getState());
        const search = articlesPageSearchSelector(thunkAPI.getState());

        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
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
