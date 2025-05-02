import { memo } from 'react';

import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsListLazy } from 'features/ArticleRecommendationsList';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import Styles from './ArticleDetailsPage.module.scss';

const reducers: TReducersList = {
    articleDetailsPageSchema: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={Styles.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsListLazy />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
