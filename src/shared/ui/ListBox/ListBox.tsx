import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import type { TDropdownDirection } from 'shared/types';

import { Button } from '../Button/Button';
import { HStack } from '../Stack';

import Styles from './ListBox.module.scss';

export interface IListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface IListBoxProps {
    items?: IListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: TDropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
    'bottom left': Styles.optionsBottomLeft,
    'bottom right': Styles.optionsBottomRight,
    'top right': Styles.optionsTopRight,
    'top left': Styles.optionsTopLeft,
};

export const ListBox = (props: IListBoxProps) => {
    const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames({ rootClass: Styles.ListBox, additionalClasses: [className] })}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={Styles.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames({ rootClass: Styles.options, additionalClasses: optionsClasses })}
                >
                    {items?.map((item) => (
                        <HListBox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames({
                                        rootClass: Styles.item,
                                        conditionalClasses: {
                                            [Styles.active]: active,
                                            [Styles.disabled]: item.disabled,
                                        },
                                    })}
                                >
                                    {selected && '!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
