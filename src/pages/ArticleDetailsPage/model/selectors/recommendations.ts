import { IStateSchema } from 'app/providers/ReduxStore';

export const articleDetailsRecommendationsIsLoadingSelector = (state: IStateSchema) =>
    state.articleDetailsRecommendations?.isLoading;
export const articleDetailsRecommendationsErrorSelector = (state: IStateSchema) =>
    state.articleDetailsRecommendations?.error;
