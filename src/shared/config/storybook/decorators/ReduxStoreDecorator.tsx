import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';

export const ReduxStoreDecorator = (initialState: DeepPartial<IStateSchema>) => (StoryComponent: Story) => {
    return (
        <ReduxStoreProvider initialState={initialState}>
            <StoryComponent />
        </ReduxStoreProvider>
    );
};
