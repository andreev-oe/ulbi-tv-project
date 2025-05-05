import type { IStateSchema, IReduxStoreWithManager, IThunkExtraArg, IThunkConfig } from './config/StateSchema';
import type { TAppDispatch } from './config/store';
import { createReduxStore } from './config/store';
import { ReduxStoreProvider } from './ui/ReduxStoreProvider';

export { ReduxStoreProvider, createReduxStore };
export type { IStateSchema, IReduxStoreWithManager, TAppDispatch, IThunkExtraArg, IThunkConfig };
