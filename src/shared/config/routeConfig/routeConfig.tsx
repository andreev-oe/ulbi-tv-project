import { AboutPageLazy } from 'pages/AboutPage';
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
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile',
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, TAppRoutesProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
    [EAppRoutes.PROFILE]: {
        path: RoutePath.notFound,
        element: <ProfilePageLazy />,
        authOnly: true,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
};
