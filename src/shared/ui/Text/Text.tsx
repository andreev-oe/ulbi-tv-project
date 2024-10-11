import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum ETextALign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ETextTheme;
    align?: ETextALign;
    size?: ETextSize;
}

export const Text = memo(
    ({
        className,
        title,
        text,
        theme = ETextTheme.PRIMARY,
        align = ETextALign.LEFT,
        size = ETextSize.M,
    }: ITextProps) => {
        return (
            <div
                className={classNames({
                    rootClass: Styles.Text,
                    additionalClasses: [className, Styles[theme], Styles[align], Styles[size]],
                })}
            >
                {title && <p className={Styles.title}>{title}</p>}
                {text && <p className={Styles.text}>{text}</p>}
            </div>
        );
    },
);

Text.displayName = 'Text';
