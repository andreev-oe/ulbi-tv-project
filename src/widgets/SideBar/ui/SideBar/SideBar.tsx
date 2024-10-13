import { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { sidebarItemsSelector } from '../../model/selectors/sidebarItemsSelector';
import { SideBarItem } from '../SidebarItem/SideBarItem';

import Styles from './SideBar.module.scss';

interface ISideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    const sidebarItemsList = useSelector(sidebarItemsSelector);

    const items = useMemo(
        () => sidebarItemsList.map((item) => <SideBarItem key={item.path} item={item} collapsed={collapsed} />),
        [sidebarItemsList, collapsed],
    );

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
                theme={EButtonTheme.BACKGROUND}
                data-testid="sidebar-toggle"
                type="button"
                size={EButtonSize.L}
                square
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={Styles.links}>{items}</div>
            <div className={Styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';
