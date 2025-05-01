import { memo, useCallback } from 'react';

import { articlesPageReducer } from 'pages/ArticlesPage';
import { ArticleInfiniteList } from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initiateArticlesPage } from '../../model/services/initiateArticlesPage/initiateArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import Styles from './ArticlesPage.module.scss';

const reducers: TReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(() => {
    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, []);

    useInitialEffect(() => {
        dispatch(initiateArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={Styles.ArticlesPage} onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={Styles.list} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
