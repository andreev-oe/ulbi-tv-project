import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

export const Loader = ({ className }: ILoaderProps) => {
    return (
        <div className={classNames({ rootClass: classes.ldsEllipsis, additionalClasses: [className] })}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
