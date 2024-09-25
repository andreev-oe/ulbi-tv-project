import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { ReducersMapObject } from 'redux';

import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState: IStateSchema) => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
