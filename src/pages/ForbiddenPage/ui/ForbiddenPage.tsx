import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const ForbiddenPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('У вас нет доступа к этой странице')}</h1>
        </Page>
    );
});

ForbiddenPage.displayName = 'AboutPage';
