import { memo, Suspense, useCallback } from 'react';

import { RequireAuth } from 'app/providers/route/ui/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, TAppRoutesProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(({ element, authOnly, path }: TAppRoutesProps) => {
        const routeElement = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{routeElement}</RequireAuth> : routeElement}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

AppRouter.displayName = 'AppRouter';
