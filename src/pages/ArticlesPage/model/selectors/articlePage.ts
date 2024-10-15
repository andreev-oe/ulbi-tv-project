import { IStateSchema } from 'app/providers/ReduxStore';
import { EArticlesView } from 'entities/Article';

export const articlesPageIsLoadingSelector = (state: IStateSchema) => state.articlesPage?.isLoading;
export const articlesPageErrorSelector = (state: IStateSchema) => state.articlesPage?.error;
export const articlesPagePageSelector = (state: IStateSchema) => state.articlesPage?.page || 1;
export const articlesPageLimitSelector = (state: IStateSchema) => state.articlesPage?.limit;
export const articlesPageHasMoreSelector = (state: IStateSchema) => state.articlesPage?.hasMore;
export const articlesPageViewSelector = (state: IStateSchema) => state.articlesPage?.view || EArticlesView.TILED;
