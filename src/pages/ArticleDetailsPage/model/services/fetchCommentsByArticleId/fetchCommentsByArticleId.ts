import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IThunkConfig } from 'app/providers/ReduxStore';
import type { IComment } from 'entities/Comment';
import i18n from 'shared/config/i18n/i18n';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, IThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        if (!articleId) {
            return thunkAPI.rejectWithValue(i18n.t('В запрос не передан id'));
        }
        try {
            const response = await thunkAPI.extra.api.get<IComment[]>(`/comments`, {
                params: {
                    articleId,
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
