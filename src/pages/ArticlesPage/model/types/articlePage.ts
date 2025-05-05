import type { EntityState } from '@reduxjs/toolkit';
import type { EArticlesSortField, EArticlesView, EArticleType, IArticle } from 'entities/Article';
import type { TSortOrder } from 'shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;

    // Пагинаия
    page: number;
    limit: number;
    hasMore: boolean;

    // Фильтрация и сортировка
    view: EArticlesView;
    order: TSortOrder;
    sort: EArticlesSortField;
    search: string;
    type: EArticleType;

    _isInitialized: boolean;
}
