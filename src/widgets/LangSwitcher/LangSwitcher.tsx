import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div>
            <Button
                className={classNames({ rootClass: '', additionalClasses: [className] })}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                {t(short ? 'Короткий перевод' : 'Перевод')}
            </Button>
        </div>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
