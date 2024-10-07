import { memo } from 'react';

import { IProfile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ETextALign, ETextTheme, Text } from 'shared/ui/Text/Text';

import Styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard = memo(({ className, data, isLoading, error }: IProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames({ rootClass: Styles.ProfileCard, additionalClasses: [className, Styles.loader] })}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames({ rootClass: Styles.ProfileCard, additionalClasses: [className, Styles.error] })}
            >
                <Text
                    theme={ETextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={ETextALign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames({ rootClass: Styles.ProfileCard, additionalClasses: [className] })}>
            <Input value={data?.first} label={t('Ваше имя')} className={Styles.input} />
            <Input value={data?.lastname} label={t('Ваша фамилия')} className={Styles.input} />
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
