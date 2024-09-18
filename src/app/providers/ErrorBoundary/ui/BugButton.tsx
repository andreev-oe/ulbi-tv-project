import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrowError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            setError(false);
            throw new Error('Произошла ошибка');
        }
    }, [error]);

    return <Button onClick={onThrowError}>{t('Сгенерировать ошибку')}</Button>;
};
