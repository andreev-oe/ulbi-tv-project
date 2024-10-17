import { IStateSchema } from 'app/providers/ReduxStore';
import { EArticlesSortField, EArticlesView, EArticleType } from 'entities/Article';

export const articlesPageIsLoadingSelector = (state: IStateSchema) => state.articlesPage?.isLoading;
export const articlesPageErrorSelector = (state: IStateSchema) => state.articlesPage?.error;
export const articlesPagePageSelector = (state: IStateSchema) => state.articlesPage?.page || 1;
export const articlesPageLimitSelector = (state: IStateSchema) => state.articlesPage?.limit;
export const articlesPageHasMoreSelector = (state: IStateSchema) => state.articlesPage?.hasMore;
export const articlesPageViewSelector = (state: IStateSchema) => state.articlesPage?.view || EArticlesView.TILED;
export const articlesPageSortSelector = (state: IStateSchema) =>
    state.articlesPage?.sort ?? EArticlesSortField.CREATED_AT;
export const articlesPageOrderSelector = (state: IStateSchema) => state.articlesPage?.order ?? 'asc';
export const articlesPageSearchSelector = (state: IStateSchema) => state.articlesPage?.search ?? '';
export const articlesPageTypeSelector = (state: IStateSchema) => state.articlesPage?.type ?? EArticleType.ALL;
export const articlesPageIsInitializedSelector = (state: IStateSchema) => state.articlesPage?._isInitialized;
