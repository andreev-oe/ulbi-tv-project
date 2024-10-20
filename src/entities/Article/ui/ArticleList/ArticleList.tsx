import { HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ETextSize, Text } from 'shared/ui/Text/Text';

import { IArticle, EArticlesView } from '../../model/types/articleTypes';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import Styles from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: EArticlesView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: EArticlesView) =>
    new Array(view === EArticlesView.TILED ? 18 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton className={Styles.card} key={index} view={view} />);

export const ArticleList = memo((props: IArticleListProps) => {
    const { className, articles, view = EArticlesView.TILED, isLoading, target } = props;

    const { t } = useTranslation();

    const renderArticle = (article: IArticle) => (
        <ArticleListItem article={article} view={view} className={Styles.card} key={article.id} target={target} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames({ rootClass: Styles.ArticleList, additionalClasses: [className, Styles[view]] })}
            >
                <Text size={ETextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames({ rootClass: Styles.ArticleList, additionalClasses: [className, Styles[view]] })}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
