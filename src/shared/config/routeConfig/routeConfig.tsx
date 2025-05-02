import { EUserRole } from 'entities/User';
import { AboutPageLazy } from 'pages/AboutPage';
import { AdminPanelPageLazy } from 'pages/AdminPanelPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from 'pages/ArticleEditPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { ForbiddenPageLazy } from 'pages/ForbiddenPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type TAppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: EUserRole[];
};

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ADMIN_PANEL = 'adminPanel',
    ARTICLE_DETAILS = 'articleDetails',
    ARTICLE_CREATE = 'articleCreate',
    ARTICLE_EDIT = 'articleEdit',
    FORBIDDEN_PAGE = 'forbiddenPage',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/:id',
    [EAppRoutes.ARTICLES]: '/articles',
    [EAppRoutes.ADMIN_PANEL]: '/admin-panel',
    [EAppRoutes.ARTICLE_DETAILS]: '/articles/:id',
    [EAppRoutes.ARTICLE_CREATE]: '/articles/create',
    [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [EAppRoutes.FORBIDDEN_PAGE]: '/forbidden-page',
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
        authOnly: true,
    },
    [EAppRoutes.ADMIN_PANEL]: {
        path: RoutePath[EAppRoutes.ADMIN_PANEL],
        element: <AdminPanelPageLazy />,
        authOnly: true,
        roles: [EUserRole.MANAGER, EUserRole.ADMIN],
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: RoutePath[EAppRoutes.ARTICLE_DETAILS],
        element: <ArticleDetailsPageLazy />,
        authOnly: true,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath[EAppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
    [EAppRoutes.ARTICLE_CREATE]: {
        path: RoutePath[EAppRoutes.ARTICLE_CREATE],
        element: <ArticleEditPageLazy />,
        authOnly: true,
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: RoutePath[EAppRoutes.ARTICLE_EDIT],
        element: <ArticleEditPageLazy />,
        authOnly: true,
    },
    [EAppRoutes.FORBIDDEN_PAGE]: {
        path: RoutePath[EAppRoutes.FORBIDDEN_PAGE],
        element: <ForbiddenPageLazy />,
    },
};
