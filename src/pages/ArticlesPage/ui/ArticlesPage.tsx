import { memo, useCallback } from 'react';

import { ArticleList, ArticleViewSelector, EArticlesView } from 'entities/Article';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';

import { articlesPageIsLoadingSelector, articlesPageViewSelector } from '../model/selectors/articlePage';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageAtions, articlesPageReducer, articlesPageSelector } from '../model/slice/articlesPageSlice';

const reducers: TReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();

    const articles = useSelector(articlesPageSelector.selectAll);

    const isLoading = useSelector(articlesPageIsLoadingSelector);

    const view = useSelector(articlesPageViewSelector);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, []);

    const onChangeView = useCallback(
        (view: EArticlesView) => {
            dispatch(articlesPageAtions.setView(view));
        },
        [view],
    );

    useInitialEffect(() => {
        dispatch(articlesPageAtions.initiateState());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticleViewSelector view={view} onChangeView={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
