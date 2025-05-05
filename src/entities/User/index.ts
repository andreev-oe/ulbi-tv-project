import { EUserRole } from './model/consts/enums';
import { userAuthDataSelector } from './model/selectors/getUserAuthData/userAuthDataSelector';
import { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector/roleSelector';
import { userInitedSelector } from './model/selectors/userInitedSelector/userInitedSelector';
import { userActions, userReducer } from './model/slice/userSlice';
import type { IUser, IUserSchema } from './model/types/userSchema';

export {
    userActions,
    userReducer,
    userAuthDataSelector,
    userInitedSelector,
    EUserRole,
    getUserRoles,
    isUserManager,
    isUserAdmin,
};
export type { IUser, IUserSchema };
