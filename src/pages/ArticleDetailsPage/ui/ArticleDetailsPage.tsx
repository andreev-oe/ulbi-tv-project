import { memo, useCallback } from 'react';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentFormLazy } from 'features/addNewCommentForm';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';

import { articleDetailsCommentsIsLoadingSelector, articleDetailsCommentsSelector } from '../model/selectors/comments';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from '../model/slices/articleDetailsCommentsSlice';

import Styles from './ArticleDetailsPage.module.scss';

const reducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
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
            <div className={Styles.ArticleDetailsPage}>
                <ArticleDetails id={id} />
                <Text className={Styles.commentTitle} title={t('Комментарии')} />
                <AddCommentFormLazy onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
