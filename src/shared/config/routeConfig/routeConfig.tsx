import { AboutPageLazy } from 'pages/AboutPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from 'pages/ArticleEditPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type TAppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    ARTICLE_CREATE = 'articleCreate',
    ARTICLE_EDIT = 'articleEdit',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/:id',
    [EAppRoutes.ARTICLES]: '/articles',
    [EAppRoutes.ARTICLE_DETAILS]: '/articles/:id',
    [EAppRoutes.ARTICLE_CREATE]: '/articles/create',
    [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, TAppRoutesProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath[EAppRoutes.MAIN],
        element: <MainPageLazy />,
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath[EAppRoutes.ABOUT],
        element: <AboutPageLazy />,
    },
    [EAppRoutes.PROFILE]: {
        path: RoutePath[EAppRoutes.PROFILE],
        element: <ProfilePageLazy />,
        authOnly: true,
    },
    [EAppRoutes.ARTICLES]: {
        path: RoutePath[EAppRoutes.ARTICLES],
        element: <ArticlesPageLazy />,
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: RoutePath[EAppRoutes.ARTICLE_DETAILS],
        element: <ArticleDetailsPageLazy />,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath[EAppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
    [EAppRoutes.ARTICLE_CREATE]: {
        path: RoutePath[EAppRoutes.ARTICLE_CREATE],
        element: <ArticleEditPageLazy />,
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: RoutePath[EAppRoutes.ARTICLE_EDIT],
        element: <ArticleEditPageLazy />,
    },
};
