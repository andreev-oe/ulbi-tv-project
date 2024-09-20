import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './SideBar.module.scss';

interface ISideBarProps {
    className?: string;
}

export const SideBar = ({ className }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames({
                rootClass: classes.SideBar,
                conditionalClasses: { [classes.collapsed]: collapsed },
                additionalClasses: [className],
            })}
        >
            <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
                {t('Переключить')}
            </button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
