import type { IStateSchema } from 'app/providers/ReduxStore';

export const loginErrorSelector = (state: IStateSchema) => state?.loginForm?.error || '';
