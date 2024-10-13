import { memo, useCallback } from 'react';

import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileFormDataSelector,
    profileIsLoadingSelector,
    profileReadonlySelector,
    profileReducer,
    profileValidationErrorsSelector,
} from 'entities/Profile';
import { EValidateProfileError } from 'entities/Profile/model/types/types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

interface IProfilePageProps {
    className?: string;
}

const reducers: TReducersList = {
    profile: profileReducer,
};

export const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(profileFormDataSelector);
    const error = useSelector(profileErrorSelector);
    const readonly = useSelector(profileReadonlySelector);
    const isLoading = useSelector(profileIsLoadingSelector);
    const validationErrors = useSelector(profileValidationErrorsSelector);
    const { id } = useParams<{ id: string }>();

    const validationErrorsTranslation = {
        [EValidateProfileError.INVALID_AGE]: t('Некорректный возраст'),
        [EValidateProfileError.INVALID_COUNTRY]: t('Некорректная страна'),
        [EValidateProfileError.INVALID_USER_DATA]: t('Имя и фамилия обязательны'),
        [EValidateProfileError.NO_DATA]: t('Нет данных'),
        [EValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }));
    }, []);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    }, []);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || undefined }));
    }, []);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }));
    }, []);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }));
    }, []);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
    }, []);

    const onChangeCurrency = useCallback((value?: ECurrency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, []);

    const onChangeCountry = useCallback((value?: ECountry) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, []);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: '', additionalClasses: [className] })}>
                <ProfilePageHeader />
                {validationErrors?.length &&
                    validationErrors.map((error) => (
                        <Text theme={ETextTheme.ERROR} key={error} text={validationErrorsTranslation[error]} />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';
