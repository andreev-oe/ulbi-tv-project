import { createSlice } from '@reduxjs/toolkit';

import type { ICounterSchema } from '../types/CounterSchema';

const initialState: ICounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
