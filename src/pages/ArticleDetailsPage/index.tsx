import { articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';
import { IArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';
import { IArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage.lazy';

export {
    ArticleDetailsPageLazy,
    IArticleDetailsCommentSchema,
    articleDetailsCommentsReducer,
    IArticleDetailsRecommendationsSchema,
};
