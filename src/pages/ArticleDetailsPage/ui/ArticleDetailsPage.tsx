import { memo } from 'react';

import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
