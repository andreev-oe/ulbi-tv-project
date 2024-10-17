import { memo, useCallback, useMemo } from 'react';

import { EArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ITabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface IArticlesTypeTabsProps {
    className?: string;
    value: EArticleType;
    onChangeType: (type: EArticleType) => void;
}

export const ArticlesTypeTabs = memo((props: IArticlesTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<ITabItem[]>(
        () => [
            {
                value: EArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: EArticleType.IT,
                content: t('Айти'),
            },
            {
                value: EArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: EArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: ITabItem) => {
            onChangeType(tab.value as EArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames({ additionalClasses: [className] })}
        />
    );
});

ArticlesTypeTabs.displayName = 'ArticlesTypeTabs';
