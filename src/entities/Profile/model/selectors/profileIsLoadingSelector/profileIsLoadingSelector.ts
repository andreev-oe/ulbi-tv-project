import { IStateSchema } from 'app/providers/ReduxStore';

export const profileIsLoadingSelector = (state: IStateSchema) => state?.profile?.isLoading;
