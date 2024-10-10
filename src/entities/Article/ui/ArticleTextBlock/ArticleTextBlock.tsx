import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './ArticleTextBlock.module.scss';

interface IArticleTextBlockProps {
    className?: string;
}

export const ArticleTextBlock = memo(({ className }: IArticleTextBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.ArticleTextBlock, additionalClasses: [className] })}>
            ArticleTextBlock
        </div>
    );
});
