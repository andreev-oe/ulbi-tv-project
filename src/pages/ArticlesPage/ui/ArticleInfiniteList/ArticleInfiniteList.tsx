import { memo } from 'react';

import { ArticleList } from 'entities/Article';
import {
    articlesPageErrorSelector,
    articlesPageIsLoadingSelector,
    articlesPageViewSelector,
} from 'pages/ArticlesPage/model/selectors/articlePage';
import { articlesPageSelector } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';

interface IArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: IArticleInfiniteListProps) => {
    const { t } = useTranslation();

    const articles = useSelector(articlesPageSelector.selectAll);
    const isLoading = useSelector(articlesPageIsLoadingSelector);
    const view = useSelector(articlesPageViewSelector);
    const error = useSelector(articlesPageErrorSelector);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return <ArticleList className={className} isLoading={isLoading} view={view} articles={articles} />;
});
