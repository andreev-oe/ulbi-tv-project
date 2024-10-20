import { articleDetailsPageReducer } from './model/slices';
import { IArticleDetailsPageSchema } from './model/types';
import { IArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';
import { IArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage.lazy';

export {
    ArticleDetailsPageLazy,
    IArticleDetailsCommentSchema,
    articleDetailsPageReducer,
    IArticleDetailsRecommendationsSchema,
    IArticleDetailsPageSchema,
};
