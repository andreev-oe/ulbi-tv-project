import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { EArticlesView } from '../..';

import Styles from './ArticleListItem.module.scss';

interface IArticleListItemSkeletonProps {
    className?: string;
    view: EArticlesView;
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === EArticlesView.LIST) {
        return (
            <div
                className={classNames({
                    rootClass: Styles.ArticleListItem,
                    additionalClasses: [className, Styles[view]],
                })}
            >
                <Card className={Styles.card}>
                    <div className={Styles.header}>
                        <Skeleton borderRadius="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={Styles.username} />
                        <Skeleton width={150} height={16} className={Styles.date} />
                    </div>
                    <Skeleton width={250} height={24} className={Styles.title} />
                    <Skeleton height={200} className={Styles.img} />
                    <div className={Styles.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames({ rootClass: Styles.ArticleListItem, additionalClasses: [className, Styles[view]] })}
        >
            <Card className={Styles.card}>
                <div className={Styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={Styles.img} />
                </div>
                <div className={Styles.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={Styles.title} />
            </Card>
        </div>
    );
});

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
