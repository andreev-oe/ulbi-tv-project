import { RouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
};
