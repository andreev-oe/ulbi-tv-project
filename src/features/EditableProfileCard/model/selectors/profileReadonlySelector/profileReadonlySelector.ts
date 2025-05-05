import type { IStateSchema } from 'app/providers/ReduxStore';

export const profileReadonlySelector = (state: IStateSchema) => state?.profile?.readonly;
