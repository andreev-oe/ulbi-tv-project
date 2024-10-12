import { memo } from 'react';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';

import Styles from './ArticleDetailsPage.module.scss';

export const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <div className={Styles.ArticleDetailsPage}>
            <ArticleDetails id={id} />
            <Text className={Styles.commentTitle} title={t('Комментарии')} />
            <CommentList
                isLoading={false}
                comments={[
                    {
                        id: '1',
                        text: 'asd',
                        user: {
                            id: '1',
                            username: 'asd',
                            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                        },
                    },
                    {
                        id: '2',
                        text: 'qwe',
                        user: {
                            id: '2',
                            username: 'qwe',
                        },
                    },
                ]}
            />
        </div>
    );
});

ArticleDetailsPage.displayName = 'ArticleDetailsPage';
