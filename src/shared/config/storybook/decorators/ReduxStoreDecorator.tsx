import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersMapObject } from 'redux';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
};

export const ReduxStoreDecorator = (
    initialState: DeepPartial<IStateSchema>,
    asyncReducers: DeepPartial<ReducersMapObject<IStateSchema>>,
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
