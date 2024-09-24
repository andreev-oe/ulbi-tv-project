import { ICounterStateSchema } from 'app/providers/ReduxStore';

export const getCounterState = (state: ICounterStateSchema) => state.counter;
