import { IArticleDetailsCommentSchema, IArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentSchema;
    recommendations: IArticleDetailsRecommendationsSchema;
}
