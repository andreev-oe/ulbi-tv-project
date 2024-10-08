import { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';
import type { ReducersMapObject } from 'redux';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // Асинхронные редюсеры
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    add: (key: TStateSchemaKey, reducer: Reducer) => void;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends ToolkitStore<IStateSchema> {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
