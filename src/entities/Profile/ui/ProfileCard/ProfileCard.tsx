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
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
}

export const ProfileCard = memo(
    ({
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
    }: IProfileCardProps) => {
        const { t } = useTranslation('profile');

        if (isLoading) {
            return (
                <div
                    className={classNames({
                        rootClass: Styles.ProfileCard,
                        additionalClasses: [className, Styles.loader],
                    })}
                >
                    <Loader />
                </div>
            );
        }

        if (error) {
            return (
                <div
                    className={classNames({
                        rootClass: Styles.ProfileCard,
                        additionalClasses: [className, Styles.error],
                    })}
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
                <Input
                    value={data?.first}
                    label={t('Ваше имя')}
                    className={Styles.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    label={t('Ваша фамилия')}
                    className={Styles.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    label={t('Ваш возраст')}
                    className={Styles.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    label={t('Ваш город')}
                    className={Styles.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        );
    },
);

ProfileCard.displayName = 'ProfileCard';
