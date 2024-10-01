import { IStateSchema, IReduxStoreWithManager, IThunkExtraArg, IThunkConfig } from './config/StateSchema';
import { createReduxStore, TAppDispatch } from './config/store';
import { ReduxStoreProvider } from './ui/ReduxStoreProvider';

export {
    ReduxStoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    TAppDispatch,
    IThunkExtraArg,
    IThunkConfig,
};
