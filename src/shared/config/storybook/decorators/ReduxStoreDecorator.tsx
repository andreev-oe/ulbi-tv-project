import { Story } from '@storybook/react';
import { IStateSchema, ReduxStoreProvider } from 'app/providers/ReduxStore';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addNewCommentFormReducer } from 'features/addNewCommentForm/model/slice/addNewCommentFormSlice';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
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
