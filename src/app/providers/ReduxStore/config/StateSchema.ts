import { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'entities/Article';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { IAddNewCommentFormSchema } from 'features/addNewCommentForm';
import { ILoginSchema } from 'features/AuthByUserName';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import type { ReducersMapObject } from 'redux';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // Асинхронные редюсеры
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentSchema;
    addNewCommentForm?: IAddNewCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
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
