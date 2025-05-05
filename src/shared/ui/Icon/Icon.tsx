import type { SVGProps, VFC } from 'react';
import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Styles from './Icon.module.scss';

interface IIconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IIconProps) => {
    return <Svg className={classNames({ rootClass: Styles.Icon, additionalClasses: [className] })} />;
});
