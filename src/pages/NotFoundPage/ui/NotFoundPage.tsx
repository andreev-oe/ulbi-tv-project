import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';

import Styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames({ rootClass: Styles.NotFoundPage, additionalClasses: [className] })}>
            <h1>{t('Страница не найдена')}</h1>
        </Page>
    );
});

NotFoundPage.displayName = 'NotFoundPage';
