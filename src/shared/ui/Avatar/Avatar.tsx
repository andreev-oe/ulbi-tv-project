import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({ className, src, size, alt }: IAvatarProps) => {
    const style = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <img
            style={style}
            className={classNames({ rootClass: Styles.Avatar, additionalClasses: [className] })}
            src={src}
            alt={alt}
        />
    );
};
