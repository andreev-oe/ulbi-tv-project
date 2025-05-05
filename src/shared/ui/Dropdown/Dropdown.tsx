import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import type { TDropdownDirection } from 'shared/types';

import { AppLink } from '../AppLink/AppLink';

import Styles from './Dropdown.module.scss';

export interface IDropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface IDropdownProps {
    className?: string;
    items: IDropdownItem[];
    direction?: TDropdownDirection;
    trigger: ReactNode;
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
    'bottom left': Styles.optionsBottomLeft,
    'bottom right': Styles.optionsBottomRight,
    'top right': Styles.optionsTopRight,
    'top left': Styles.optionsTopLeft,
};

export function Dropdown(props: IDropdownProps) {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames({ rootClass: Styles.Dropdown, additionalClasses: [className] })}>
            <Menu.Button className={Styles.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames({ rootClass: Styles.menu, additionalClasses: menuClasses })}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames({
                                rootClass: Styles.item,
                                conditionalClasses: { [Styles.active]: active },
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={item.href} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
