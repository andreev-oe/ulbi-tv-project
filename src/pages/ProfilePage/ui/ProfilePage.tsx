import { memo, useCallback, useEffect } from 'react';

import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileFormDataSelector,
    profileIsLoadingSelector,
    profileReadonlySelector,
    profileReducer,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

interface IProfilePageProps {
    className?: string;
}

const reducers: TReducersList = {
    profile: profileReducer,
};

export const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(profileFormDataSelector);
    const error = useSelector(profileErrorSelector);
    const readonly = useSelector(profileReadonlySelector);
    const isLoading = useSelector(profileIsLoadingSelector);

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: '', additionalClasses: [className] })}>
                <ProfilePageHeader />
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
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';
