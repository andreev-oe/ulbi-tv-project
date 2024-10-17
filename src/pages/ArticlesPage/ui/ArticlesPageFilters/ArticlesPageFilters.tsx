import { memo, useCallback } from 'react';

import {
    ArticlesSortField,
    ArticleViewSelector,
    EArticlesSortField,
    EArticlesView,
    EArticleType,
} from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TSortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

import {
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
    articlesPageTypeSelector,
    articlesPageViewSelector,
} from '../../model/selectors/articlePage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

import Styles from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: IArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(articlesPageViewSelector);
    const sort = useSelector(articlesPageSortSelector);
    const order = useSelector(articlesPageOrderSelector);
    const search = useSelector(articlesPageSearchSelector);
    const type = useSelector(articlesPageTypeSelector);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: EArticlesView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [view],
    );

    const onChangeSort = useCallback(
        (newSort: EArticlesSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: TSortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: EArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData],
    );

    return (
        <div className={classNames({ rootClass: Styles.ArticlesPageFilters, additionalClasses: [className] })}>
            <div className={Styles.sortWrapper}>
                <ArticlesSortField
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onChangeView={onChangeView} />
            </div>
            <Card className={Styles.search}>
                <Input onChange={onChangeSearch} value={search} label={t('Поиск')} />
            </Card>
        </div>
    );
});
