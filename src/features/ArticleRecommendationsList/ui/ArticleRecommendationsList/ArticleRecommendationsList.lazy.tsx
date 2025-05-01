import { lazy } from 'react';

export const ArticleRecommendationsListLazy = lazy(() =>
    import('./ArticleRecommendationsList').then((module) => ({ default: module.ArticleRecommendationsList })),
);
