import type { IStateSchema } from 'app/providers/ReduxStore';

export const profileFormDataSelector = (state: IStateSchema) => state?.profile?.formData;
