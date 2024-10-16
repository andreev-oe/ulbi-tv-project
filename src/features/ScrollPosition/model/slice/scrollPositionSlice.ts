import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IScrollPositionSchema } from '../types/ScrollPositionSchema';

const initialState: IScrollPositionSchema = {
    scroll: {},
};

export const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState: initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = scrollPositionSlice;
export const { reducer: scrollPositionReducer } = scrollPositionSlice;
