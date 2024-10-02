import { memo, useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IProfilePageProps {
    className?: string;
}

const reducers: TReducersList = {
    profile: profileReducer,
};

export const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: '', additionalClasses: [className] })}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';
