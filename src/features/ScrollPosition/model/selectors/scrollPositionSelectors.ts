import { createSelector } from '@reduxjs/toolkit';
import type { IStateSchema } from 'app/providers/ReduxStore';

export const scrollPositionsSelector = (state: IStateSchema) => state.scrollPosition.scroll;
export const scrollPositionByPath = createSelector(
    scrollPositionsSelector,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
