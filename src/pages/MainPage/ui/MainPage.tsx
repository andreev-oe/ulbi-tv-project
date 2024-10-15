import { memo, useState } from 'react';

import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

export const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const [inputValue, setInputValue] = useState<string>();

    const onChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <Page>
            <h1>{t('Главная страница')}</h1>
            <BugButton />
            <Counter />
            <Input value={inputValue} onChange={onChange} label={t('Введите текст')} />
        </Page>
    );
});

MainPage.displayName = 'MainPage';
