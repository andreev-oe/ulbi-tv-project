import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface IArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = memo(({ className }: IArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames({ additionalClasses: [className] })}>
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
        </div>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';
