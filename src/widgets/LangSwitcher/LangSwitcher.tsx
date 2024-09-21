import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div>
            <Button
                className={classNames({ rootClass: '', additionalClasses: [className] })}
                theme={ThemeButton.CLEAR}
                onClick={toggleLanguage}
            >
                {t('Перевод')}
            </Button>
        </div>
    );
};
