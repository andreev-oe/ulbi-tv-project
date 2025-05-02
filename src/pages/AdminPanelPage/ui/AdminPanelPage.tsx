import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const AdminPanelPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('Панель администратора')}</h1>
        </Page>
    );
});

AdminPanelPage.displayName = 'AboutPage';
