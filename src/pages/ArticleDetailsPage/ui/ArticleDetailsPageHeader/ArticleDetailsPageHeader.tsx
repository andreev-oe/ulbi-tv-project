import { memo, useCallback } from 'react';

import { articleDetailsDataSelector } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

import { canEditArticleSelector } from '../../model/selectors/article';

import cls from './ArticleDetailsPageHeader.module.scss';

interface IArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: IArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(canEditArticleSelector);
    const article = useSelector(articleDetailsDataSelector);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        const path = generatePath(RoutePath.articleEdit, { id: article?.id });
        navigate(path);
    }, [article?.id, navigate]);

    return (
        <div className={classNames({ rootClass: cls.ArticleDetailsPageHeader, additionalClasses: [className] })}>
            <Button theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button className={cls.editBtn} theme={EButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
