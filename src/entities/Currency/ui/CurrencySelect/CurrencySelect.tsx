import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { ECurrency } from '../../model/types/curency';

interface ICurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: ECurrency) => void;
    readonly?: boolean;
}

const options = [
    { value: ECurrency.RUB, content: ECurrency.RUB },
    { value: ECurrency.EUR, content: ECurrency.EUR },
    { value: ECurrency.USD, content: ECurrency.USD },
];

export const CurrencySelect = ({ className, value, onChange, readonly }: ICurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            if (onChange) {
                onChange(value as ECurrency);
            }
        },
        [onChange],
    );

    return (
        <Select
            className={classNames({ rootClass: '', additionalClasses: [className] })}
            label={t('Валюта')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
