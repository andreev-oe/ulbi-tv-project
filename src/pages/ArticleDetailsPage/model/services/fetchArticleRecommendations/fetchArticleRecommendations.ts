import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { IArticle } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.get<IArticle[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
