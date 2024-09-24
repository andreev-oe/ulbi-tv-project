import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { IStateSchema } from './StateSchema';

export const createReduxStore = (initialState: IStateSchema) => {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
