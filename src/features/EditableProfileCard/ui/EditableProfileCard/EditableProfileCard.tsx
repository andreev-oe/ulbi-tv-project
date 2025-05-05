import { memo, useCallback } from 'react';

import type { ECountry } from 'entities/Country';
import type { ECurrency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import type { TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { ETextTheme, Text } from 'shared/ui/Text/Text';

import { EValidateProfileError } from '../../model/consts/enums';
import { profileErrorSelector } from '../../model/selectors/profileErrorSelector/profileErrorSelector';
import { profileFormDataSelector } from '../../model/selectors/profileFormDataSelector/profileFormDataSelector';
import { profileIsLoadingSelector } from '../../model/selectors/profileIsLoadingSelector/profileIsLoadingSelector';
import { profileReadonlySelector } from '../../model/selectors/profileReadonlySelector/profileReadonlySelector';
import { profileValidationErrorsSelector } from '../../model/selectors/profileValidationErrorsSelector/profileValidationErrorsSelector';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfilePageHeader/EditableProfileCardHeader';

interface IEditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: TReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: IEditableProfileCardProps) => {
    const { className, id } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(profileFormDataSelector);
    const error = useSelector(profileErrorSelector);
    const readonly = useSelector(profileReadonlySelector);
    const isLoading = useSelector(profileIsLoadingSelector);
    const validationErrors = useSelector(profileValidationErrorsSelector);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames({ additionalClasses: [className] })}>
                <EditableProfileCardHeader />
                {validationErrors?.length &&
                    validationErrors.map((err) => (
                        <Text key={err} theme={ETextTheme.ERROR} text={validationErrorsTranslation[err]} />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
