import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { IComment } from '../../model/types/comment';

import Styles from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: ICommentCardProps) => {
    const { user, text } = comment;

    if (isLoading) {
        return (
            <div className={classNames({ rootClass: Styles.CommentCard, additionalClasses: [className] })}>
                <div className={Styles.header}>
                    <Skeleton width="30px" height="30px" borderRadius="50%" />
                    <Skeleton width="200px" height="30px" />
                </div>
                <Skeleton width="100%" height="100px" />
            </div>
        );
    }

    return (
        <div className={classNames({ rootClass: Styles.CommentCard, additionalClasses: [className] })}>
            <div className={Styles.header}>
                {user.avatar && <Avatar src={user.avatar} size={30} />}
                <Text title={user.username} />
            </div>
            <Text text={text} />
        </div>
    );
});
