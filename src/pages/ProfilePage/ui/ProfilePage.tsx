import { memo } from 'react';

import { EditableProfileCard } from 'features/EditableProfileCard';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

interface IProfilePageProps {
    className?: string;
}

const reducers: TReducersList = {
    profile: profileReducer,
};

export const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames({ rootClass: '', additionalClasses: [className] })}>
                <VStack gap="16" max>
                    <EditableProfileCard id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';
