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

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ETextTheme;
    align?: ETextALign;
}

export const Text = memo(
    ({ className, title, text, theme = ETextTheme.PRIMARY, align = ETextALign.LEFT }: ITextProps) => {
        return (
            <div
                className={classNames({
                    rootClass: Styles.Text,
                    additionalClasses: [className, Styles[theme], Styles[align]],
                })}
            >
                {title && <p className={Styles.title}>{title}</p>}
                {text && <p className={Styles.text}>{text}</p>}
            </div>
        );
    },
);

Text.displayName = 'Text';
