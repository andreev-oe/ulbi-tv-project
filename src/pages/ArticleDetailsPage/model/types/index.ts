import type { IArticleDetailsCommentSchema, IArticleDetailsRecommendationsSchema } from '../..';

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentSchema;
    recommendations: IArticleDetailsRecommendationsSchema;
}
