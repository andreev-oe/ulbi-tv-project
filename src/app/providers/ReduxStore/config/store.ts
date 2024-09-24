import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { ICounterStateSchema } from './StateSchema';

export const createReduxStore = (initialState: ICounterStateSchema) => {
    return configureStore<ICounterStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
