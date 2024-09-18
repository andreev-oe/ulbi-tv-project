import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

export const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            <BugButton />
        </div>
    );
};
