import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { IComment } from '../../model/types/comment';

import Styles from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
}

export const CommentCard = memo(({ className, comment }: ICommentCardProps) => {
    const { user, text } = comment;

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
