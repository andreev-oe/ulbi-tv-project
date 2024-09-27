import { IStateSchema } from 'app/providers/ReduxStore';

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
