import { IStateSchema } from 'app/providers/ReduxStore';

export const articleDetailsCommentsIsLoadingSelector = (state: IStateSchema) => state.articleDetailsComments?.isLoading;
export const articleDetailsCommentsErrorSelector = (state: IStateSchema) => state.articleDetailsComments?.error;
