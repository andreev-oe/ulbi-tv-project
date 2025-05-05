import type { CSSProperties } from 'react';
import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = memo(({ className, height, width, borderRadius }: ISkeletonProps) => {
    const styles: CSSProperties = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    };

    return (
        <div style={styles} className={classNames({ rootClass: Styles.Skeleton, additionalClasses: [className] })} />
    );
});
