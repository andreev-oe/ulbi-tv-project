import type { ReactElement } from 'react';
import { useMemo } from 'react';

import type { EUserRole } from 'entities/User';
import { getUserRoles, userAuthDataSelector } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface IRequireAuthProps {
    children: ReactElement;
    roles?: EUserRole[];
}

export const RequireAuth = ({ children, roles }: IRequireAuthProps) => {
    const auth = useSelector(userAuthDataSelector);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRole = useMemo(() => {
        if (!roles) {
            return true;
        }

        return userRoles?.some((userRole) => roles?.includes(userRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRole) {
        return <Navigate to={RoutePath.forbiddenPage} state={{ from: location }} replace />;
    }

    return children;
};
