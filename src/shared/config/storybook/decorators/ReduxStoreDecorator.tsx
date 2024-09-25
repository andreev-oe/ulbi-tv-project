import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';

export const ReduxStoreDecorator = (initialState: IStateSchema) => (StoryComponent: Story) => {
    return (
        <ReduxStoreProvider initialState={initialState as IStateSchema}>
            <StoryComponent />
        </ReduxStoreProvider>
    );
};
