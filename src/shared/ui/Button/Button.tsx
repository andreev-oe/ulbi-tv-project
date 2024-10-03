import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo(
    ({
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.S,
        disabled,
        ...other
    }: IButtonProps) => (
        <button
            type="button"
            className={classNames({
                rootClass: Styles.Button,
                conditionalClasses: { [Styles.square]: square, [Styles.disabled]: disabled },
                additionalClasses: [className, Styles[theme], Styles[size]],
            })}
            disabled={disabled}
            {...other}
        >
            {children}
        </button>
    ),
);

Button.displayName = 'Button';
