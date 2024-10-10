import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './ArticleCodeBlock.module.scss';

interface IArticleCodeBlockProps {
    className?: string;
}

export const ArticleCodeBlock = memo(({ className }: IArticleCodeBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.ArticleCodeBlock, additionalClasses: [className] })}>
            ArticleCodeBlock
        </div>
    );
});
