import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { ICounterStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IReduxStoreProviderProps {
    children?: ReactNode;
    initialState?: ICounterStateSchema;
}

export const ReduxStoreProvider = ({ children, initialState }: IReduxStoreProviderProps) => {
    const store = createReduxStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};
