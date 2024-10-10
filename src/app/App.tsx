import { Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/route';
import { useTheme } from 'app/providers/themeProvider';
import { userActions, userInitedSelector } from 'entities/User';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NavBar } from 'widgets/NavBar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { SideBar } from 'widgets/SideBar';

export const App = () => {
    const { theme } = useTheme();

    const inited = useSelector(userInitedSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames({ rootClass: 'app', additionalClasses: [theme] })}>
            <Suspense fallback={<PageLoader />}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
