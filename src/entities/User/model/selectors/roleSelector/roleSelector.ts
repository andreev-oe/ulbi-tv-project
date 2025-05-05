import { createSelector } from '@reduxjs/toolkit';
import type { IStateSchema } from 'app/providers/ReduxStore';

import { EUserRole } from '../../..';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (userRoles) => Boolean(userRoles?.includes(EUserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (userRoles) =>
    Boolean(userRoles?.includes(EUserRole.MANAGER)),
);
