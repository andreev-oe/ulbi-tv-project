import { memo, useEffect } from 'react';

import {
    fetchProfileData,
    ProfileCard,
    profileDataSelector,
    profileErrorSelector,
    profileIsLoadingSelector,
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
    const data = useSelector(profileDataSelector);
    const error = useSelector(profileErrorSelector);
    const isLoading = useSelector(profileIsLoadingSelector);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: '', additionalClasses: [className] })}>
                <ProfilePageHeader />
                <ProfileCard data={data} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';
