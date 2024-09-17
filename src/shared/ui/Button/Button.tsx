import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...other }: ButtonProps) => (
    <button
        type="button"
        className={classNames({
            rootClass: classes.Button,
            additionalClasses: [className, classes[theme]],
        })}
        {...other}
    >
        {children}
    </button>
);
