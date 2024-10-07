import { useCallback } from 'react';

import { profileActions, profileReadonlySelector, updateProfileData } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import Styles from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation();

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
        <div className={classNames({ rootClass: Styles.ProfilePageHeader, additionalClasses: [className] })}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button className={Styles.editButton} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button className={Styles.editButton} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                        {t('Отменить')}
                    </Button>
                    <Button className={Styles.saveButton} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
