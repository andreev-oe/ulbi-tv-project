import { IStateSchema } from 'app/providers/ReduxStore';

export const userAuthDataSelector = (state: IStateSchema) => state.user.authData;
