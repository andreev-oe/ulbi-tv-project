import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';

import { EUserRole } from '../../types/userSchema';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (userRoles) => Boolean(userRoles?.includes(EUserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (userRoles) =>
    Boolean(userRoles?.includes(EUserRole.MANAGER)),
);
