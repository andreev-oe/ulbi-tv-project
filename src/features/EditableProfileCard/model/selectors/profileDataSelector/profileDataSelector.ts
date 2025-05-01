import { IStateSchema } from 'app/providers/ReduxStore';

export const profileDataSelector = (state: IStateSchema) => state?.profile?.data;
