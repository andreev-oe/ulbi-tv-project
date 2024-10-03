import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Input.module.scss';

type THTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends THTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    autofocus?: boolean;
}

export const Input = memo(({ className, value, onChange, type = 'text', label, autofocus, ...other }: IInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement | null>(null);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart ?? 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames({ rootClass: Styles.Input, additionalClasses: [className] })}>
            {label && <div className={Styles.label}>{`${label}>`}</div>}
            <div className={Styles.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    className={Styles.input}
                    {...other}
                />
                {isFocused && <span className={Styles.caret} style={{ left: `${caretPosition * 9.6}px` }} />}
            </div>
        </div>
    );
});
