import { profileDataSelector } from './model/selectors/profileDataSelector/profileDataSelector';
import { profileErrorSelector } from './model/selectors/profileErrorSelector/profileErrorSelector';
import { profileIsLoadingSelector } from './model/selectors/profileIsLoadingSelector/profileIsLoadingSelector';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { IProfile, IProfileSchema } from './model/types/types';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    IProfile,
    IProfileSchema,
    profileReducer,
    profileActions,
    fetchProfileData,
    profileDataSelector,
    profileErrorSelector,
    profileIsLoadingSelector,
    ProfileCard,
};
