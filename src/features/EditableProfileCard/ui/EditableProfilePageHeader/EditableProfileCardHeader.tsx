import { useCallback } from 'react';

import { userAuthDataSelector } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { profileDataSelector } from '../../model/selectors/profileDataSelector/profileDataSelector';
import { profileReadonlySelector } from '../../model/selectors/profileReadonlySelector/profileReadonlySelector';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import Styles from './EditableProfileCardHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const authData = useSelector(userAuthDataSelector);

    const profileData = useSelector(profileDataSelector);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(profileReadonlySelector);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, []);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, []);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, []);

    return (
        <div className={classNames({ rootClass: Styles.EditableProfileCardHeader, additionalClasses: [className] })}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={Styles.buttonWrapper}>
                    {readonly ? (
                        <Button className={Styles.editButton} theme={EButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={Styles.editButton}
                                theme={EButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button className={Styles.saveButton} theme={EButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
