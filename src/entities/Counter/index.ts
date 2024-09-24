import { counterActions, counterReducer } from './model/slice/counterSlice';
import { ICounterSchema } from './model/types/CounterSchema';
import { Counter } from './ui/Counter';

export { Counter, ICounterSchema, counterReducer, counterActions };
