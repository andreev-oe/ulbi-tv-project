import { memo } from 'react';

import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('О сайте')}</h1>
            <Counter />
        </Page>
    );
});

AboutPage.displayName = 'AboutPage';
