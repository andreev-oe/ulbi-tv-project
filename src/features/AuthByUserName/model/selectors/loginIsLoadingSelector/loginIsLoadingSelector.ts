import { IStateSchema } from 'app/providers/ReduxStore';

export const loginIsLoadingSelector = (state: IStateSchema) => state?.loginForm?.isLoading || false;
