import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...other }: ButtonProps) => {

    return (
        <button className={classNames({rootClass: classes.Button, additionalClasses: [className, classes[theme]]})} {...other} >
            {children}
        </button>
    )
};
