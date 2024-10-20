import { createSelector } from '@reduxjs/toolkit';
import { articleDetailsDataSelector } from 'entities/Article';
import { userAuthDataSelector } from 'entities/User';

export const canEditArticleSelector = createSelector(
    articleDetailsDataSelector,
    userAuthDataSelector,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
