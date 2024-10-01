import { memo, useState } from 'react';

import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const [inputValue, setInputValue] = useState<string>();

    const onChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            <BugButton />
            <Counter />
            <Input value={inputValue} onChange={onChange} label={t('Введите текст')} />
        </div>
    );
});

MainPage.displayName = 'MainPage';
