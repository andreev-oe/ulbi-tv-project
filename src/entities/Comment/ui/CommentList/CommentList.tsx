import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import Styles from './CommentList.module.scss';

interface ICommentListProps {
    className?: string;
    comments: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: ICommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames({ rootClass: Styles.skeletonCommentCard, additionalClasses: [className] })}>
                <div className={Styles.skeletonHeader}>
                    <Skeleton width="30px" height="30px" borderRadius="50%" />
                    <Skeleton width="200px" height="30px" />
                </div>
                <Skeleton width="100%" height="100px" />
            </div>
        );
    }
    return (
        <div className={classNames({ rootClass: Styles.CommentList, additionalClasses: [className] })}>
            {comments?.length ? (
                comments.map((comment) => <CommentCard comment={comment} />)
            ) : (
                <Text text={t('Комментарий отсутствует')} />
            )}
        </div>
    );
});
