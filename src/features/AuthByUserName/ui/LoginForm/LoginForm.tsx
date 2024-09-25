import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import Styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.LoginForm, additionalClasses: [className] })}>
            <Input autofocus type="text" className={Styles.input} label={t('Введите логин')} />
            <Input type="text" className={Styles.input} label={t('Введите пароль')} />
            <Button className={Styles.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
