type TCLassNames = Record<string, string | boolean>;

export const classNames = ({
    rootClass,
    conditionalClasses = {},
    additionalClasses = []
}: {
    rootClass: string,
    conditionalClasses?: TCLassNames,
    additionalClasses?: string[]
}): string => {
    return [
        rootClass,
        ...Object.entries(conditionalClasses)
            .filter(([_className, value]) => Boolean(value))
            .map(([className, _value]) => className),
        ...additionalClasses.filter(Boolean)
    ].join(' ');
};
