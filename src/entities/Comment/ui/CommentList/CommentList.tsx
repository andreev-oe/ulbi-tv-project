import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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

    return (
        <div className={classNames({ rootClass: Styles.CommentList, additionalClasses: [className] })}>
            {comments?.length ? (
                comments.map((comment) => <CommentCard comment={comment} isLoading={isLoading} />)
            ) : (
                <Text text={t('Комментарий отсутствует')} />
            )}
        </div>
    );
});
