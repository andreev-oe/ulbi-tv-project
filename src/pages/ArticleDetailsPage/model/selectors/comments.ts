import { IStateSchema } from 'app/providers/ReduxStore';
import { commentsAdapter } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

export const articleDetailsCommentsSelector = commentsAdapter.getSelectors<IStateSchema>((state) => {
    return state.articleDetailsComments || commentsAdapter.getInitialState();
});

export const articleDetailsCommentsIsLoadingSelector = (state: IStateSchema) => state.articleDetailsComments?.isLoading;
export const articleDetailsCommentsErrorSelector = (state: IStateSchema) => state.articleDetailsComments?.error;
