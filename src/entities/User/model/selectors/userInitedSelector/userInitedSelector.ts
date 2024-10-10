import { IStateSchema } from 'app/providers/ReduxStore';

export const userInitedSelector = (state: IStateSchema) => state.user._inited;
