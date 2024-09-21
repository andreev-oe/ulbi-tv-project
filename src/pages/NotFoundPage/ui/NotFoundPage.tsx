import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: classes.NotFoundPage, additionalClasses: [className] })}>
            <h1>{t('Страница не найдена')}</h1>
        </div>
    );
};
