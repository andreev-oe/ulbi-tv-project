import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div >
            <Button
                className={classNames({rootClass: classes.LangSwitcher, additionalClasses: [className]})}
                theme={ThemeButton.CLEAR}
                onClick={toggleLanguage}
            >
                {t('Перевод')}
            </Button>
        </div>
    )
};
