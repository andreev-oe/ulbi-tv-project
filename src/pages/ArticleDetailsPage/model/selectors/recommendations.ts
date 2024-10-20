import { IStateSchema } from 'app/providers/ReduxStore';

export const articleDetailsRecommendationsIsLoadingSelector = (state: IStateSchema) =>
    state.articleDetailsPageSchema?.recommendations.isLoading;
export const articleDetailsRecommendationsErrorSelector = (state: IStateSchema) =>
    state.articleDetailsPageSchema?.recommendations.error;
