import { render } from 'react-dom';
import 'app/styles/index.scss';

import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ReduxStoreProvider } from 'app/providers/ReduxStore';
import { ThemeProvider } from 'app/providers/themeProvider';
import 'shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';

render(
    <ReduxStoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </ReduxStoreProvider>,
    document.getElementById('root'),
);
