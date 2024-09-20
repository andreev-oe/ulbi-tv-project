import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = ({ className, children, theme, ...other }: IButtonProps) => (
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
