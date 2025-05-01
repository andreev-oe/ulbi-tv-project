import { memo, useCallback } from 'react';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentFormLazy } from 'features/AddNewCommentForm';
import { ArticleRecommendationsListLazy } from 'features/ArticleRecommendationsList';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ArticleDetailsPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

import { articleDetailsCommentsIsLoadingSelector } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsSelector } from '../../model/slices/articleDetailsCommentsSlice';

import Styles from './ArticleDetailsPage.module.scss';

const reducers: TReducersList = {
    articleDetailsPageSchema: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(articleDetailsCommentsSelector.selectAll);
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, []);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={Styles.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsListLazy />
                <Text className={Styles.commentTitle} title={t('Комментарии')} />
                <AddCommentFormLazy onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
