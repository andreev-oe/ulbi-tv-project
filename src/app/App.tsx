import { Suspense } from 'react';

import { AppRouter } from 'app/providers/route';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { SideBar } from 'widgets/SideBar';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames({ rootClass: 'app', additionalClasses: [theme] })}>
            <Suspense fallback={<PageLoader />}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
