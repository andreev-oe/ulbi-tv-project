import { memo } from 'react';

import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import { EArticlesView } from '../..';

import Styles from './ArticleViewField.module.scss';

interface IArticleViewSelectorProps {
    className?: string;
    view: EArticlesView;
    onChangeView?: (view: EArticlesView) => void;
}

export const ArticleViewField = memo(({ className, view, onChangeView }: IArticleViewSelectorProps) => {
    const viewTypes = [
        {
            view: EArticlesView.TILED,
            icon: TiledIcon,
        },
        {
            view: EArticlesView.LIST,
            icon: ListIcon,
        },
    ];

    const onClick = (newView: EArticlesView) => () => {
        onChangeView?.(newView);
    };

    return (
        <div className={classNames({ rootClass: Styles.ArticleViewField, additionalClasses: [className] })}>
            {viewTypes.map((viewType) => {
                return (
                    <Button key={viewType.view} theme={EButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                        <Icon
                            Svg={viewType.icon}
                            className={classNames({
                                conditionalClasses: { [Styles.selected]: viewType.view === view },
                            })}
                        />
                    </Button>
                );
            })}
        </div>
    );
});

ArticleViewField.displayName = 'ArticleViewField';
