import { ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { IStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IReduxStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

export const ReduxStoreProvider = ({ children, initialState }: IReduxStoreProviderProps) => {
    const store = createReduxStore(initialState as IStateSchema);
    return <Provider store={store}>{children}</Provider>;
};
