import { memo, ReactNode, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card, ECardTheme } from 'shared/ui/Card/Card';

import Styles from './Tabs.module.scss';

export interface ITabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo((props: ITabsProps) => {
    const { className, tabs, onTabClick, value } = props;

    const clickHandle = useCallback(
        (tab: ITabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames({ rootClass: Styles.Tabs, additionalClasses: [className] })}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';
