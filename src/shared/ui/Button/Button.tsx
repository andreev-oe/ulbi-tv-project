import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EButtonTheme;
    square?: boolean;
    size?: EButtonSize;
    disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo(
    ({
        className,
        children,
        theme = EButtonTheme.OUTLINE,
        square,
        size = EButtonSize.S,
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
