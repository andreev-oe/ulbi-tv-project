import { memo, useCallback, useState } from 'react';

import { userActions, userAuthDataSelector } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

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
                <Text className={Styles.appName} title={t('Ulbi TV App')} theme={ETextTheme.INVERTED} />
                <div className={Styles.links}>
                    <AppLink to={RoutePath.articleCreate} theme={AppLinkThemes.SECONDARY} className={Styles.createBtn}>
                        {t('Создать статью')}
                    </AppLink>
                    <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={onLogout} size={EButtonSize.M}>
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
