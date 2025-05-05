import { articlesPageReducer } from './model/slice/articlesPageSlice';
import type { IArticlesPageSchema } from './model/types/articlePage';
import { ArticlesPageLazy } from './ui/ArticlesPage/ArticlesPage.lazy';

export { ArticlesPageLazy, articlesPageReducer };
export type { IArticlesPageSchema };
