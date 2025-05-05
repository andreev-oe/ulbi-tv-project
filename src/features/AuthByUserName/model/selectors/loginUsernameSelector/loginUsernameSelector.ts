import type { IStateSchema } from 'app/providers/ReduxStore';

export const loginUsernameSelector = (state: IStateSchema) => state?.loginForm?.username || '';
