import { memo } from 'react';

import { profileDataSelector, profileErrorSelector, profileIsLoadingSelector } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import Styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: IProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(profileDataSelector);
    const error = useSelector(profileErrorSelector);
    const isLoading = useSelector(profileIsLoadingSelector);

    return (
        <div className={classNames({ rootClass: Styles.ProfileCard, additionalClasses: [className] })}>
            <div className={Styles.header}>
                <Text title={t('Профиль')} />
                <Button className={Styles.editButton} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={Styles.data}>
                <Input value={data?.first} label={t('Ваше имя')} className={Styles.input} />
                <Input value={data?.lastname} label={t('Ваша фамилия')} className={Styles.input} />
            </div>
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
