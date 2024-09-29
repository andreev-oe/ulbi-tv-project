import { ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ReducersMapObject } from 'redux';

import { IStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IReduxStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const ReduxStoreProvider = ({ children, initialState, asyncReducers }: IReduxStoreProviderProps) => {
    const store = createReduxStore(initialState as IStateSchema, asyncReducers as ReducersMapObject<IStateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
