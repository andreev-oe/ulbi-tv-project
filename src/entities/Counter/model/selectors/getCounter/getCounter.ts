import { IStateSchema } from 'app/providers/ReduxStore';

export const getCounter = (state: IStateSchema) => state.counter;
