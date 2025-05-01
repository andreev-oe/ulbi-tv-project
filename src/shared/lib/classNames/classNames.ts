export type TClassNames = Record<string, string | boolean | undefined>;

export const classNames = ({
    rootClass,
    conditionalClasses = {},
    additionalClasses = [],
}: {
    rootClass?: string;
    conditionalClasses?: TClassNames;
    additionalClasses?: Array<string | undefined>;
}): string =>
    [
        rootClass,
        ...Object.entries(conditionalClasses)
            .filter(([_className, value]) => Boolean(value))
            .map(([className, _value]) => className),
        ...additionalClasses.filter(Boolean),
    ].join(' ');
