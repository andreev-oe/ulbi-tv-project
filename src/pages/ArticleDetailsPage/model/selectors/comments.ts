import { IStateSchema } from 'app/providers/ReduxStore';

export const articleDetailsCommentsIsLoadingSelector = (state: IStateSchema) =>
    state.articleDetailsPageSchema?.comments.isLoading;
export const articleDetailsCommentsErrorSelector = (state: IStateSchema) =>
    state.articleDetailsPageSchema?.comments.error;
