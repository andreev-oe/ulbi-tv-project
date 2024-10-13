import { memo } from 'react';

import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';

import { IArticle, EArticleView } from '../../model/types/articleTypes';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import Styles from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: EArticleView;
}

const getSkeletons = (view: EArticleView) =>
    new Array(view === EArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton className={Styles.card} key={index} view={view} />);

export const ArticleList = memo((props: IArticleListProps) => {
    const { className, articles, view = EArticleView.SMALL, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames({ rootClass: Styles.ArticleList, additionalClasses: [className, Styles[view]] })}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: IArticle) => (
        <ArticleListItem article={article} view={view} className={Styles.card} key={article.id} />
    );

    return (
        <div className={classNames({ rootClass: Styles.ArticleList, additionalClasses: [className, Styles[view]] })}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
