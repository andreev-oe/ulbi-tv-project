import { memo, Suspense, useCallback } from 'react';

import { RequireAuth } from 'app/providers/route/ui/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import type { TAppRoutesProps } from 'shared/config/routeConfig/types';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(({ element, authOnly, path, roles }: TAppRoutesProps) => {
        const routeElement = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth roles={roles}>{routeElement}</RequireAuth> : routeElement}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

AppRouter.displayName = 'AppRouter';
