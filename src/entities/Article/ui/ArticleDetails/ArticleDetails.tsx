import { memo, ReactElement, useCallback, useMemo } from 'react';

import { EArticleBlockType, TArticleBlock } from 'entities/Article/model/types/articleTypes';
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ETextALign, ETextSize, Text } from 'shared/ui/Text/Text';

import {
    articleDetailsDataSelector,
    articleDetailsErrorSelector,
    articleDetailsIsLoadingSelector,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import Styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: TReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: IArticleDetailsProps) => {
    const { t } = useTranslation('article-details');

    const article = useSelector(articleDetailsDataSelector);

    const isLoading = useSelector(articleDetailsIsLoadingSelector);

    const error = useSelector(articleDetailsErrorSelector);

    const dispatch = useAppDispatch();

    const renderBlock = useCallback((block: TArticleBlock) => {
        switch (block.type) {
            case EArticleBlockType.CODE:
                return <ArticleCodeBlock key={block.id} block={block} className={Styles.block} />;
            case EArticleBlockType.IMAGE:
                return <ArticleImageBlock key={block.id} block={block} className={Styles.block} />;
            case EArticleBlockType.TEXT:
                return <ArticleTextBlock key={block.id} className={Styles.block} block={block} />;
            default:
                return null;
        }
    }, []);

    const content = useMemo(() => {
        let result: ReactElement;

        if (isLoading) {
            result = (
                <>
                    <Skeleton className={Styles.avatar} width={200} height={200} borderRadius="50%" />
                    <Skeleton className={Styles.title} width={300} height={32} />
                    <Skeleton className={Styles.skeleton} width={600} height={24} />
                    <Skeleton className={Styles.skeleton} width="100%" height={200} />
                    <Skeleton className={Styles.skeleton} width="100%" height={200} />
                </>
            );
        } else if (error) {
            result = <Text align={ETextALign.CENTER} title={t('Произошла ошибка при загрузке статьи.')} />;
        } else {
            result = (
                <>
                    <div className={Styles.avatarWrapper}>
                        <Avatar size={200} src={article?.img} className={Styles.avatar} />
                    </div>
                    <Text className={Styles.title} title={article?.title} text={article?.subtitle} size={ETextSize.L} />
                    <div className={Styles.articleInfo}>
                        <Icon className={Styles.icon} Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </div>
                    <div className={Styles.articleInfo}>
                        <Icon className={Styles.icon} Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </div>
                    {article?.blocks.map(renderBlock)}
                </>
            );
        }

        return result;
    }, [isLoading, error, article]);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: Styles.ArticleDetails, additionalClasses: [className] })}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
