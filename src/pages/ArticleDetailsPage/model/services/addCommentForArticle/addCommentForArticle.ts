import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/ReduxStore';
import { articleDetailsDataSelector } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { userAuthDataSelector } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (commentText, thunkAPI) => {
        const userData = userAuthDataSelector(thunkAPI.getState());
        const article = articleDetailsDataSelector(thunkAPI.getState());

        if (!userData || !commentText || !article) {
            return thunkAPI.rejectWithValue(i18n.t('Ошибка при отправке комментария'));
        }

        try {
            const response = await thunkAPI.extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text: commentText,
            });

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
        }
    },
);
