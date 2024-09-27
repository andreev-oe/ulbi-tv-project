import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/service/loginByUserName/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import Styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames({ rootClass: Styles.LoginForm, additionalClasses: [className] })}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={ETextTheme.ERROR} className={Styles.error} />}
            <Input
                onChange={onChangeUsername}
                autofocus
                type="text"
                className={Styles.input}
                label={t('Введите логин')}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                type="text"
                className={Styles.input}
                label={t('Введите пароль')}
                value={password}
            />
            <Button disabled={isLoading} className={Styles.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClick}>
                {t('Войти')}
            </Button>
        </div>
    );
});
