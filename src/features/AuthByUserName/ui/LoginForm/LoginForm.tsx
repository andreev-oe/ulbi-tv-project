import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

import { loginErrorSelector } from '../../model/selectors/loginErrorSelector/loginErrorSelector';
import { loginIsLoadingSelector } from '../../model/selectors/loginIsLoadingSelector/loginIsLoadingSelector';
import { loginPasswordSelector } from '../../model/selectors/loginPasswordSelector/loginPasswordSelector';
import { loginUsernameSelector } from '../../model/selectors/loginUsernameSelector/loginUsernameSelector';
import { loginByUsername } from '../../model/service/loginByUserName/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import Styles from './LoginForm.module.scss';

export interface ILoginFormProps {
    className?: string;
}

const initialReducers: TReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const isLoading = useSelector(loginIsLoadingSelector);
    const error = useSelector(loginErrorSelector);
    const username = useSelector(loginUsernameSelector);
    const password = useSelector(loginPasswordSelector);

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
                <Button
                    disabled={isLoading}
                    className={Styles.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
