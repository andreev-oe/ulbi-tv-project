import { IStateSchema } from 'app/providers/ReduxStore';

export const loginPasswordSelector = (state: IStateSchema) => state?.loginForm?.password || '';
