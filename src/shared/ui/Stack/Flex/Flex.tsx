import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames, TClassNames } from 'shared/lib/classNames/classNames';

import Styles from './Flex.module.scss';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between';
export type TFlexAlign = 'start' | 'center' | 'end';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
    start: Styles.justifyStart,
    center: Styles.justifyCenter,
    end: Styles.justifyEnd,
    between: Styles.justifyBetween,
};

const alignClasses: Record<TFlexAlign, string> = {
    start: Styles.alignStart,
    center: Styles.alignCenter,
    end: Styles.alignEnd,
};

const directionClasses: Record<TFlexDirection, string> = {
    row: Styles.directionRow,
    column: Styles.directionColumn,
};

const gapClasses: Record<TFlexGap, string> = {
    4: Styles.gap4,
    8: Styles.gap8,
    16: Styles.gap16,
    32: Styles.gap32,
};

type TDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface IFlexProps extends TDivProps {
    className?: string;
    children: ReactNode;
    justify?: TFlexJustify;
    align?: TFlexAlign;
    direction: TFlexDirection;
    gap?: TFlexGap;
    max?: boolean;
}

export const Flex = (props: IFlexProps) => {
    const { className, children, justify = 'start', align = 'center', direction = 'row', gap, max } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: TClassNames = {
        [Styles.max]: max,
    };

    return (
        <div className={classNames({ rootClass: Styles.Flex, conditionalClasses: mods, additionalClasses: classes })}>
            {children}
        </div>
    );
};
