import { memo } from 'react';

import { generatePath } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import type { IComment } from '../../model/types/comment';

import Styles from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
}

export const CommentCard = memo(({ className, comment }: ICommentCardProps) => {
    const { user, text } = comment;

    const userProfilePath = generatePath(RoutePath.profile, { id: user.id });

    return (
        <div className={classNames({ rootClass: Styles.CommentCard, additionalClasses: [className] })}>
            <AppLink to={userProfilePath} className={Styles.header}>
                {user.avatar && <Avatar src={user.avatar} size={30} />}
                <Text title={user.username} />
            </AppLink>
            <Text text={text} />
        </div>
    );
});
