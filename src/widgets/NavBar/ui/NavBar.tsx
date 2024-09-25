import { useCallback, useState } from 'react';

import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import Styles from './NavBar.module.scss';

interface INavBarProps {
    className?: string;
}

export const NavBar = (props: INavBarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, [setIsAuthModalOpened]);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpened(true);
    }, [setIsAuthModalOpened]);

    return (
        <div className={classNames({ rootClass: Styles.NavBar, additionalClasses: [className] })}>
            <div className={Styles.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModalOpened} onClose={onCloseModal} />
            </div>
        </div>
    );
};
