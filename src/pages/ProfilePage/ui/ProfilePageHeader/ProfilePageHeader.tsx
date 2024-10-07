import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import Styles from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames({ rootClass: Styles.ProfilePageHeader, additionalClasses: [className] })}>
            <Text title={t('Профиль')} />
            <Button className={Styles.editButton} theme={ButtonTheme.OUTLINE}>
                {t('Редактировать')}
            </Button>
        </div>
    );
};
