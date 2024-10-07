import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Input.module.scss';

type THTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface IInputProps extends THTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(
    ({ className, value, onChange, type = 'text', label, autofocus, readonly, ...other }: IInputProps) => {
        const [isFocused, setIsFocused] = useState(false);

        const [caretPosition, setCaretPosition] = useState(0);

        const ref = useRef<HTMLInputElement | null>(null);

        const isCaretVisible = isFocused && !readonly;

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
            <div
                className={classNames({
                    rootClass: Styles.Input,
                    conditionalClasses: { [Styles.readonly]: readonly },
                    additionalClasses: [className],
                })}
            >
                {label && <div className={Styles.label}>{`${label}>`}</div>}
                <div className={Styles.caretWrapper}>
                    <input
                        disabled={readonly}
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
                    {isCaretVisible && <span className={Styles.caret} style={{ left: `${caretPosition * 9.6}px` }} />}
                </div>
            </div>
        );
    },
);
