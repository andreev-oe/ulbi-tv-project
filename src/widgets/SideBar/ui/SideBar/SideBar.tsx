import { memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { sidebarItemsList } from '../../model/consts';
import { SideBarItem } from '../SidebarItem/SideBarItem';

import Styles from './SideBar.module.scss';

interface ISideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames({
                rootClass: Styles.SideBar,
                conditionalClasses: { [Styles.collapsed]: collapsed },
                additionalClasses: [className],
            })}
        >
            <Button
                className={Styles.toggler}
                theme={ButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                type="button"
                size={ButtonSize.L}
                square
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={Styles.links}>
                {sidebarItemsList.map((item) => (
                    <SideBarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </div>
            <div className={Styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';
