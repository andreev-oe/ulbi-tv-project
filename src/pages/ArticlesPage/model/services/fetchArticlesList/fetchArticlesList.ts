import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/ReduxStore';
import type { IArticle } from 'entities/Article';
import { EArticleType } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

import {
    articlesPageLimitSelector,
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
    articlesPageTypeSelector,
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
        const type = articlesPageTypeSelector(thunkAPI.getState());

        addQueryParams({
            sort,
            order,
            type,
            search,
        });

        try {
            const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === EArticleType.ALL ? undefined : type,
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
