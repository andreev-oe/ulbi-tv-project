import type { IStateSchema } from 'app/providers/ReduxStore';

export const profileErrorSelector = (state: IStateSchema) => state?.profile?.error;
