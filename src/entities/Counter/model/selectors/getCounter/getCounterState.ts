import type { IStateSchema } from 'app/providers/ReduxStore';

export const getCounterState = (state: IStateSchema) => state.counter;
