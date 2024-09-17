import { classNames } from 'shared/lib/classNames/classNames';
import classes from './SideBar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div
            className={classNames({
                rootClass: classes.SideBar,
                conditionalClasses: {[classes.collapsed]: collapsed},
                additionalClasses: [className]
            })}>
            <button onClick={onToggle}>Toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
};
