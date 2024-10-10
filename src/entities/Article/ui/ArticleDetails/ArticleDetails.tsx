import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = memo(({ className }: IArticleDetailsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.ArticleDetails, additionalClasses: [className] })}>
            ArticleDetails
        </div>
    );
});
