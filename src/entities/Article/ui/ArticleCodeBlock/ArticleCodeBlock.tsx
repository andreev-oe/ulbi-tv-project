import { memo } from 'react';

import { IArticleCodeBlock } from 'entities/Article/model/types/articleTypes';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

import Styles from './ArticleCodeBlock.module.scss';

interface IArticleCodeBlockProps {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo(({ className, block }: IArticleCodeBlockProps) => {
    return (
        <div className={classNames({ rootClass: Styles.ArticleCodeBlock, additionalClasses: [className] })}>
            <Code text={block.code} />
        </div>
    );
});
