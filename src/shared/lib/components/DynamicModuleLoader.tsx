import { FC, useEffect } from 'react';

import { Reducer } from '@reduxjs/toolkit';
import { IReduxStoreWithManager } from 'app/providers/ReduxStore';
import { TStateSchemaKey } from 'app/providers/ReduxStore/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer;
};

type TReducerListEntry = [TStateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
    reducers: TReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({ reducers, removeAfterUnmount, children }) => {
    const store = useStore() as IReduxStoreWithManager;

    const dispatch = useDispatch();

    useEffect(() => {
        const rootReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
            if (!rootReducers[name]) {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@ADD ${name} reducer` });
            }
        });

        return () => {
            Object.entries(reducers).forEach(([name, _reducer]: TReducerListEntry) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                }
            });
        };
    }, []);

    return <>{children}</>;
};
