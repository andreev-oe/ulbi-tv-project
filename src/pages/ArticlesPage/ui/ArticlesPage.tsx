import { memo, useCallback } from 'react';

import { ArticleList, ArticleViewSelector, EArticlesView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

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

    const onChangeView = useCallback(
        (view: EArticlesView) => {
            dispatch(articlesPageAtions.setView(view));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(articlesPageAtions.initiateState());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ArticleViewSelector view={view} onChangeView={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
