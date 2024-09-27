import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ETextTheme;
}

export const Text = ({ className, title, text, theme = ETextTheme.PRIMARY }: ITextProps) => {
    return (
        <div className={classNames({ rootClass: Styles.Text, additionalClasses: [className, Styles[theme]] })}>
            {title && <p className={Styles.title}>{title}</p>}
            {text && <p className={Styles.text}>{text}</p>}
        </div>
    );
};
