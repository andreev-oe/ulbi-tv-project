import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './ArticleDetailsBlock.module.scss';

interface IArticleDetailsBlockProps {
    className?: string;
}

export const ArticleDetailsBlock = memo(({ className }: IArticleDetailsBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.ArticleDetailsBlock, additionalClasses: [className] })}>
            ArticleDetailsBlock
        </div>
    );
});
