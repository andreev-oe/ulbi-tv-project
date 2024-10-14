import { createSelector } from '@reduxjs/toolkit';
import { userAuthDataSelector } from 'entities/User';
import { generatePath } from 'react-router-dom';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { ISidebarItem } from '../types/sidebar';

export const sidebarItemsSelector = createSelector(userAuthDataSelector, (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
        {
            path: RoutePath.main,
            Icon: HomeIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];

    if (userData) {
        const profilePath = generatePath(RoutePath.profile, { id: userData.id });

        sidebarItemsList.push(
            {
                path: profilePath,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
