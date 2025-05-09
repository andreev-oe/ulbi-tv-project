import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, ETextALign } from 'shared/ui/Text/Text';

import type { IArticleImageBlock } from '../../model/types/articleTypes';

import Styles from './ArticleImageBlock.module.scss';

interface IArticleDetailsBlockProps {
    className?: string;
    block: IArticleImageBlock;
}

export const ArticleImageBlock = memo(({ className, block }: IArticleDetailsBlockProps) => {
    return (
        <div className={classNames({ rootClass: Styles.ArticleDetailsBlock, additionalClasses: [className] })}>
            <img src={block.src} alt={block.title} className={Styles.img} />
            {block.title && <Text text={block.title} align={ETextALign.CENTER} />}
        </div>
    );
});
