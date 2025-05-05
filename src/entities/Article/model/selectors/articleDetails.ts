import type { IStateSchema } from 'app/providers/ReduxStore';

export const articleDetailsDataSelector = (state: IStateSchema) => state.articleDetails?.data;
export const articleDetailsIsLoadingSelector = (state: IStateSchema) => state.articleDetails?.isLoading || false;
export const articleDetailsErrorSelector = (state: IStateSchema) => state.articleDetails?.error;
