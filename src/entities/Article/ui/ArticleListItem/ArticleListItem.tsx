import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';

import { EArticleBlockType, EArticlesView, IArticle, IArticleTextBlock } from '../../model/types/articleTypes';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import Styles from './ArticleListItem.module.scss';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: EArticlesView;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view } = props;

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [isHovered, bindHover] = useHover();

    const onOpenArticle = useCallback(() => {
        const path = generatePath(RoutePath.articleDetails, { id: article.id });
        navigate(path);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={Styles.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={Styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === EArticlesView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === EArticleBlockType.TEXT) as IArticleTextBlock;

        return (
            <div
                className={classNames({
                    rootClass: Styles.ArticleListItem,
                    additionalClasses: [className, Styles[view]],
                })}
            >
                <Card className={Styles.card}>
                    <div className={Styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={Styles.username} />
                        <Text text={article.createdAt} className={Styles.date} />
                    </div>
                    <Text title={article.title} className={Styles.title} />
                    {types}
                    <img src={article.img} className={Styles.img} alt={article.title} />
                    {textBlock && <ArticleTextBlock block={textBlock} className={Styles.textBlock} />}
                    <div className={Styles.footer}>
                        <Button onClick={onOpenArticle} theme={EButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames({ rootClass: Styles.ArticleListItem, additionalClasses: [className, Styles[view]] })}
        >
            <Card className={Styles.card} onClick={onOpenArticle}>
                <div className={Styles.imageWrapper}>
                    <img alt={article.title} src={article.img} className={Styles.img} />
                    <Text text={article.createdAt} className={Styles.date} />
                </div>
                <div className={Styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={Styles.title} />
            </Card>
        </div>
    );
});
