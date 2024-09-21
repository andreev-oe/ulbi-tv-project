import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface IComponentRenderOptions {
    route?: string;
}

export const ComponentRender = (component: ReactNode, options?: IComponentRenderOptions) => {
    const { route = RoutePath[AppRoutes.MAIN] } = options || {};
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </MemoryRouter>,
    );
};
