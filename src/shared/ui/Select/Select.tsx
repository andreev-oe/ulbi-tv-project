import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Select.module.scss';

interface ISelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: ISelectProps) => {
    const optionList = useMemo(() => {
        return options?.map((item) => (
            <option key={item.value} value={item.value}>
                {item.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(evt.target.value);
        }
    };

    return (
        <div className={classNames({ rootClass: Styles.Wrapper, additionalClasses: [className] })}>
            {label && <span className={Styles.label}>{`${label}>`}</span>}
            <select className={Styles.select} onChange={onChangeHandler} value={value} disabled={readonly}>
                {optionList}
            </select>
        </div>
    );
});

Select.displayName = 'Select';
