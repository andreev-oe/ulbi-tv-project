import { IArticle } from './articleTypes';

export interface IArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: IArticle;
}
