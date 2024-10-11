import { memo, useCallback, useState } from 'react';

import { userAuthDataSelector, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

import Styles from './NavBar.module.scss';

interface INavBarProps {
    className?: string;
}

export const NavBar = memo((props: INavBarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const authData = useSelector(userAuthDataSelector);

    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpened(false);
    }, [setIsAuthModalOpened]);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpened(true);
    }, [setIsAuthModalOpened]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames({ rootClass: Styles.NavBar, additionalClasses: [className] })}>
                <div className={Styles.links}>
                    <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames({ rootClass: Styles.NavBar, additionalClasses: [className] })}>
            <div className={Styles.links}>
                <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
                    {t('Войти')}
                </Button>
                {isAuthModalOpened && <LoginModal isOpen={isAuthModalOpened} onClose={onCloseModal} />}
            </div>
        </div>
    );
});

NavBar.displayName = 'NavBar';
