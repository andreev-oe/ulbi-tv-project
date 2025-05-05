import { articleDetailsPageReducer } from './model/slices';
import type { IArticleDetailsPageSchema } from './model/types';
import type { IArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';
import type { IArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';

export { ArticleDetailsPageLazy, articleDetailsPageReducer };
export type { IArticleDetailsCommentSchema, IArticleDetailsRecommendationsSchema, IArticleDetailsPageSchema };
