import { memo } from 'react';

import { ArticleList, EArticleView } from 'entities/Article';

export const ArticlesPage = memo(() => {
    return (
        <div>
            <ArticleList isLoading view={EArticleView.BIG} articles={[]} />
        </div>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
