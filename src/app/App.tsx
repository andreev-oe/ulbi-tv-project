import './styles/index.scss';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/route';
import { NavBar } from 'widgets/NavBar';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames({rootClass: 'app', additionalClasses: [theme]})}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <NavBar />
            <AppRouter />
        </div>
    );
}
