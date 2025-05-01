import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addNewCommentFormReducer } from 'features/AddNewCommentForm/model/slice/addNewCommentFormSlice';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { ReducersMapObject } from 'redux';
import { TReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: TReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewCommentForm: addNewCommentFormReducer,
    articleDetailsPageSchema: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
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
