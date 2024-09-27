import { IStateSchema } from 'app/providers/ReduxStore';

export const getLoginState = (state: IStateSchema) => state?.loginForm;
