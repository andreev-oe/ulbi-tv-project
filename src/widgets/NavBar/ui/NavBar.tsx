import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './NavBar.module.scss';

interface INavBarProps {
    className?: string;
}

export const NavBar = (props: INavBarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.NavBar, additionalClasses: [className] })}>
            <div className={Styles.links}>{t('Заголовок')}</div>
        </div>
    );
};
