import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import type { TReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import {
    addNewCommentFormErrorSelector,
    addNewCommentFormTextSelector,
} from '../../model/selectors/addNewCommentFormSelectors';
import { addNewCommentFormActions, addNewCommentFormReducer } from '../../model/slice/addNewCommentFormSlice';

import Styles from './AddCommentForm.module.scss';

interface IAddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: TReducersList = {
    addNewCommentForm: addNewCommentFormReducer,
};

export const AddCommentForm = memo(({ className, onSendComment }: IAddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(addNewCommentFormTextSelector);
    const error = useSelector(addNewCommentFormErrorSelector);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentFormActions.setText(value));
    }, []);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [text, onSendComment, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames({ rootClass: Styles.AddCommentForm, additionalClasses: [className] })}>
                <Input
                    className={Styles.input}
                    label={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendCommentHandler}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});
