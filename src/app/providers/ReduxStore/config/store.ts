import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { ReducersMapObject } from 'redux';
import { api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState: IStateSchema, asyncReducers?: ReducersMapObject<IStateSchema>) => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as unknown as ReducersMapObject<IStateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: api,
                    },
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
