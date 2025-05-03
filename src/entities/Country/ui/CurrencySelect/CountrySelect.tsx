import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';

import { ECountry } from '../../model/types/country';

interface ICountrySelectProps {
    className?: string;
    value?: ECountry;
    onChange?: (value: ECountry) => void;
    readonly?: boolean;
}

const options = [
    { value: ECountry.Russia, content: ECountry.Russia },
    { value: ECountry.Armenia, content: ECountry.Armenia },
    { value: ECountry.Belarus, content: ECountry.Belarus },
    { value: ECountry.Ukraine, content: ECountry.Ukraine },
    { value: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
];

export const CountrySelect = ({ className, value, onChange, readonly }: ICountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            if (onChange) {
                onChange(value as ECountry);
            }
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames({ rootClass: '', additionalClasses: [className] })}
            label={t('Страна')}
            defaultValue={value}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );
};
