import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { ReducersMapObject } from 'redux';

import { IStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IReduxStoreProviderProps {
    children?: ReactNode;
    initialState?: TDeepPartial<IStateSchema>;
    asyncReducers?: TDeepPartial<ReducersMapObject<IStateSchema>>;
}

export const ReduxStoreProvider = ({ children, initialState, asyncReducers }: IReduxStoreProviderProps) => {
    const store = createReduxStore(initialState as IStateSchema, asyncReducers as ReducersMapObject<IStateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
