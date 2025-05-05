import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import type { IArticleTextBlock } from '../../model/types/articleTypes';

import Styles from './ArticleTextBlock.module.scss';

interface IArticleTextBlockProps {
    className?: string;
    block: IArticleTextBlock;
}

export const ArticleTextBlock = memo(({ className, block }: IArticleTextBlockProps) => {
    return (
        <div className={classNames({ rootClass: Styles.ArticleTextBlock, additionalClasses: [className] })}>
            {block.title && <Text title={Styles.title} className={Styles.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={Styles.paragraph} />
            ))}
        </div>
    );
});
