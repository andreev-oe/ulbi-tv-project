import { Story } from '@storybook/react';
import { ICounterStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';

export const ReduxStoreDecorator = (initialState: ICounterStateSchema) => (StoryComponent: Story) => {
    return (
        <ReduxStoreProvider initialState={initialState as ICounterStateSchema}>
            <StoryComponent />
        </ReduxStoreProvider>
    );
};
