import { IStateSchema } from 'app/providers/ReduxStore';
import { EArticlesView } from 'entities/Article';

import { articlesPageAdapter } from '../slice/articlesPageSlice';

export const articlesPageSelector = articlesPageAdapter.getSelectors<IStateSchema>((state) => {
    return state.articlesPage || articlesPageAdapter.getInitialState();
});

export const articlesPageIsLoadingSelector = (state: IStateSchema) => state.articlesPage?.isLoading;
export const articlesPageErrorSelector = (state: IStateSchema) => state.articlesPage?.error;
export const articlesPageViewSelector = (state: IStateSchema) => state.articlesPage?.view || EArticlesView.SMALL;
