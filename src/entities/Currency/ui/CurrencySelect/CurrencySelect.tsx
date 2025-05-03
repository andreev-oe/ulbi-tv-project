import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';

import { ECurrency } from '../../model/types/curency';

interface ICurrencySelectProps {
    className?: string;
    value?: ECurrency;
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
        <ListBox
            className={classNames({ rootClass: '', additionalClasses: [className] })}
            label={t('Валюта')}
            defaultValue={value}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
};
