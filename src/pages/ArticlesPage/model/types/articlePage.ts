import { EntityState } from '@reduxjs/toolkit';
import { EArticlesView, IArticle } from 'entities/Article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;
    view: EArticlesView;
    page: number;
    limit?: number;
    hasMore: boolean;
}
