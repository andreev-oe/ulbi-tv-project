import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames({ rootClass: classes.PageError, additionalClasses: [className] })}>
            <h1>{t('Произошла ошибка')}</h1>
            <Button onClick={() => window.location.reload()}>{t('Обновить страницу')}</Button>
        </div>
    );
};
