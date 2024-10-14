import { memo } from 'react';

import { ArticleList, EArticlesView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

import {
    articlesPageErrorSelector,
    articlesPageIsLoadingSelector,
    articlesPageSelector,
    articlesPageViewSelector,
} from '../model/selectors/articlePage';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageReducer } from '../model/slice/articlesPageSlice';

const reducers: TReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();

    const articles = useSelector(articlesPageSelector.selectAll);

    const isLoading = useSelector(articlesPageIsLoadingSelector);

    const error = useSelector(articlesPageErrorSelector);

    const view = useSelector(articlesPageViewSelector);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    );
});

ArticlesPage.displayName = 'ArticlesPage';
