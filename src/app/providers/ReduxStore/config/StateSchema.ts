import { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'entities/Article';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { IAddNewCommentFormSchema } from 'features/AddNewCommentForm';
import { ILoginSchema } from 'features/AuthByUserName';
import { IScrollPositionSchema } from 'features/ScrollPosition';
import { IArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import type { ReducersMapObject } from 'redux';
import { rtkApi } from 'shared/api/rtkApi';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    scrollPosition: IScrollPositionSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Асинхронные редюсеры
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    addNewCommentForm?: IAddNewCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
    articleDetailsPageSchema?: IArticleDetailsPageSchema;
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
