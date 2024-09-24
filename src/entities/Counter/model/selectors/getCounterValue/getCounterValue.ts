import { createSelector } from '@reduxjs/toolkit';

import { getCounterState } from '../getCounter/getCounterState';

export const getCounterValue = createSelector(getCounterState, (counter) => counter.value);
