import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { IUser, IUserSchema } from 'entities/User/model/types/userSchema';

import { userActions, userReducer } from './model/slice/userSlice';

export { userActions, userReducer, IUser, IUserSchema, getUserAuthData };
