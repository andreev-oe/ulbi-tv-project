import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersMapObject } from 'redux';
import { TReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: TReducersList = {
    loginForm: loginReducer,
};

export const ReduxStoreDecorator = (
    initialState: TDeepPartial<IStateSchema>,
    asyncReducers?: TDeepPartial<ReducersMapObject<IStateSchema>>,
) => {
    return (StoryComponent: Story) => {
        return (
            <ReduxStoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </ReduxStoreProvider>
        );
    };
};
