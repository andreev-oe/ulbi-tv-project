import { memo, useCallback } from 'react';

import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, EButtonTheme } from '../Button/Button';

import Styles from './Code.module.scss';

interface ICodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: ICodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames({ rootClass: Styles.Code, additionalClasses: [className] })}>
            <Button onClick={onCopy} className={Styles.copyBtn} theme={EButtonTheme.CLEAR}>
                <CopyIcon className={Styles.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
