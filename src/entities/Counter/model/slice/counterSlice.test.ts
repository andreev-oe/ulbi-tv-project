import { ICounterSchema } from '../types/CounterSchema';

import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('Прибавляет 1', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('Убавляет 1', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('Добавляет при отсутствии значения в стейте', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
    test('Убавляет при отсутствии значения в стейте', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
});
