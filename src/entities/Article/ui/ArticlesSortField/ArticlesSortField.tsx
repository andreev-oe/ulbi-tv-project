import { memo, useCallback, useMemo } from 'react';

import { EArticlesSortField } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TSortOrder } from 'shared/types';
import { ISelectOption, Select } from 'shared/ui/Select/Select';

import Styles from './ArticlesSortField.module.scss';

interface IArticlesSortFieldProps {
    className?: string;
    sort: EArticlesSortField;
    order: TSortOrder;
    onChangeOrder: (newOrder: TSortOrder) => void;
    onChangeSort: (newSort: EArticlesSortField) => void;
}

export const ArticlesSortField = memo(
    ({ className, sort, onChangeSort, onChangeOrder, order }: IArticlesSortFieldProps) => {
        const { t } = useTranslation();

        const orderOptions = useMemo<ISelectOption[]>(
            () => [
                {
                    value: 'asc',
                    content: t('возрастанию'),
                },
                {
                    value: 'desc',
                    content: t('убыванию'),
                },
            ],
            [],
        );

        const sortFieldOptions = useMemo<ISelectOption[]>(
            () => [
                {
                    value: EArticlesSortField.CREATED_AT,
                    content: t('дате создания'),
                },
                {
                    value: EArticlesSortField.TITLE,
                    content: t('названию'),
                },
                {
                    value: EArticlesSortField.VIEWS,
                    content: t('просмотрам'),
                },
            ],
            [],
        );

        const changeSortHandler = useCallback(
            (newSort: string) => {
                onChangeSort(newSort as EArticlesSortField);
            },
            [onChangeSort],
        );

        const changeOrderHandler = useCallback(
            (newOrder: string) => {
                onChangeOrder(newOrder as TSortOrder);
            },
            [onChangeOrder],
        );

        return (
            <div className={classNames({ rootClass: Styles.ArticlesSortField, additionalClasses: [className] })}>
                <Select
                    options={sortFieldOptions}
                    label={t('Сортировать ПО')}
                    value={sort}
                    onChange={changeSortHandler}
                />
                <Select options={orderOptions} label={t('по')} value={order} onChange={changeOrderHandler} />
            </div>
        );
    },
);
