import { memo, useCallback } from 'react';

import { ArticleList } from 'entities/Article';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';

import { articlesPageIsLoadingSelector, articlesPageViewSelector } from '../../model/selectors/articlePage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initiateArticlesPage } from '../../model/services/initiateArticlesPage/initiateArticlesPage';
import { articlesPageReducer, articlesPageSelector } from '../../model/slice/articlesPageSlice';

import Styles from './ArticlesPage.module.scss';

const reducers: TReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(() => {
    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const articles = useSelector(articlesPageSelector.selectAll);

    const isLoading = useSelector(articlesPageIsLoadingSelector);

    const view = useSelector(articlesPageViewSelector);

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
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
