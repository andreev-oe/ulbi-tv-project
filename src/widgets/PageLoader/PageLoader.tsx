import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => {
    return (
        <div className={classNames({ rootClass: classes.PageLoader, additionalClasses: [className] })}>
            <Loader />
        </div>
    );
};
