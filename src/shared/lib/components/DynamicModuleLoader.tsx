import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';

import type { Reducer } from '@reduxjs/toolkit';
import type { IReduxStoreWithManager } from 'app/providers/ReduxStore';
import type { TStateSchemaKey } from 'app/providers/ReduxStore/config/StateSchema';
import { useStore } from 'react-redux';

import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer;
};

interface IDynamicModuleLoaderProps {
    reducers: TReducersList;
    removeAfterUnmount?: boolean;
    children?: ReactNode;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({ reducers, removeAfterUnmount, children }) => {
    const store = useStore() as IReduxStoreWithManager;

    const dispatch = useAppDispatch();

    useEffect(() => {
        const rootReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const nameWithType = name as TStateSchemaKey;
            if (!rootReducers[nameWithType]) {
                store.reducerManager.add(nameWithType, reducer);
                dispatch({ type: `@ADD ${nameWithType} reducer` });
            }
        });

        return () => {
            Object.entries(reducers).forEach(([name, _reducer]) => {
                if (removeAfterUnmount) {
                    const nameWithType = name as TStateSchemaKey;
                    store.reducerManager.remove(nameWithType);
                    dispatch({ type: `@REMOVE ${nameWithType} reducer` });
                }
            });
        };
    }, []);

    return <>{children}</>;
};
