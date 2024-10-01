import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface IProfilePageProps {
    className?: string;
}

export const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { t } = useTranslation();

    return <div className={classNames({ rootClass: '', additionalClasses: [className] })}>{t('ProfilePage')}</div>;
});

ProfilePage.displayName = 'ProfilePage';
