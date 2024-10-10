import { memo } from 'react';

import { ArticleDetails } from 'entities/Article';

export const ArticleDetailsPage = memo(() => {
    return (
        <div>
            <ArticleDetails />
        </div>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
