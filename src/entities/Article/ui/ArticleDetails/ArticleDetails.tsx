import { memo, ReactElement, useEffect, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ETextALign, Text } from 'shared/ui/Text/Text';

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

    const content = useMemo(() => {
        let result: ReactElement;

        if (isLoading) {
            result = <div>Loading</div>;
        } else if (error) {
            result = <Text align={ETextALign.CENTER} title={t('Произошла ошибка при загрузке статьи.')} />;
        } else {
            result = <div>ArticleDetails</div>;
        }

        return result;
    }, [isLoading, error, article]);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: Styles.ArticleDetails, additionalClasses: [className] })}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
