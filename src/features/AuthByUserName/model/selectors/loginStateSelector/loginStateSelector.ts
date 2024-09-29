import { IStateSchema } from 'app/providers/ReduxStore';

export const loginStateSelector = (state: IStateSchema) => state?.loginForm;
