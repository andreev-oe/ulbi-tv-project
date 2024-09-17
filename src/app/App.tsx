import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/route';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames({rootClass: 'app', additionalClasses: [theme]})}>
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}
