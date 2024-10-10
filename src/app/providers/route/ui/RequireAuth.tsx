import { ReactElement } from 'react';

import { userAuthDataSelector } from 'entities/User';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: ReactElement }) => {
    const auth = useSelector(userAuthDataSelector);
    const location = useLocation();

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
