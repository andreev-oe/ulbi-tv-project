import { memo } from 'react';

import { ArticleList } from 'entities/Article';
import Styles from 'entities/Article/ui/ArticleDetails/ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { ETextSize, Text } from 'shared/ui/Text/Text';

import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface IArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: IArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useGetArticleRecommendationsListQuery(3);

    if (isLoading || error) {
        return <Skeleton className={Styles.skeleton} width="100%" height={200} />;
    }

    if (!articles) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames({ additionalClasses: [className] })}>
            <Text size={ETextSize.L} title={t('Рекомендуем')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
