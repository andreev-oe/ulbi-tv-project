import type { AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { AxiosInstance } from 'axios';
import type { IArticleDetailsSchema } from 'entities/Article';
import type { ICounterSchema } from 'entities/Counter';
import type { IUserSchema } from 'entities/User';
import type { IAddNewCommentFormSchema } from 'features/AddNewCommentForm';
import type { ILoginSchema } from 'features/AuthByUserName';
import type { IProfileSchema } from 'features/EditableProfileCard/model/types/types';
import type { IScrollPositionSchema } from 'features/ScrollPosition';
import type { IArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import type { IArticlesPageSchema } from 'pages/ArticlesPage';
import type { ReducersMapObject } from 'redux';
import type { rtkApi } from 'shared/api/rtkApi';

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
