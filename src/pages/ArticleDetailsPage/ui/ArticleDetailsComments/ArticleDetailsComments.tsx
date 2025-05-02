import { memo, useCallback } from 'react';

import { CommentList } from 'entities/Comment';
import { AddCommentFormLazy } from 'features/AddNewCommentForm';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

import { articleDetailsCommentsIsLoadingSelector } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsSelector } from '../../model/slices/articleDetailsCommentsSlice';
import Styles from '../ArticleDetailsPage/ArticleDetailsPage.module.scss';

interface IArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: IArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(articleDetailsCommentsSelector.selectAll);
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector);
    const dispatch = useDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, []);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack gap="16" max className={classNames({ additionalClasses: [className] })}>
            <Text className={Styles.commentTitle} title={t('Комментарии')} />
            <AddCommentFormLazy onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
});
