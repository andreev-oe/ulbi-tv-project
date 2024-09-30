import { ReactNode, Suspense } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
}

export const ComponentRender = (component: ReactNode, options?: IComponentRenderOptions) => {
    const { route = RoutePath[AppRoutes.MAIN], initialState } = options || {};
    return render(
        <Suspense fallback={<Loader />}>
            <ReduxStoreProvider initialState={initialState as IStateSchema}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
                </MemoryRouter>
            </ReduxStoreProvider>
        </Suspense>,
    );
};
