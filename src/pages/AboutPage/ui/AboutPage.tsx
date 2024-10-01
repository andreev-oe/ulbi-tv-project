import { memo } from 'react';

import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <div>
            <h1>{t('О сайте')}</h1>
            <Counter />
        </div>
    );
});

AboutPage.displayName = 'AboutPage';
