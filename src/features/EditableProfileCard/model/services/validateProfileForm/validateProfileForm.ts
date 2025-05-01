import { IProfile } from 'entities/Profile';
import { EValidateProfileError } from 'features/EditableProfileCard/model/types/types';

export const validateProfileForm = (profile?: IProfile) => {
    if (!profile) {
        return [EValidateProfileError.NO_DATA];
    }
    const { first, lastname, age, country } = profile;
    const errors: EValidateProfileError[] = [];
    if (!first || !lastname) {
        errors.push(EValidateProfileError.INVALID_USER_DATA);
    }

    if (!age || (age < 0 && Number.isInteger(age))) {
        errors.push(EValidateProfileError.INVALID_AGE);
    }

    if (!country) {
        errors.push(EValidateProfileError.INVALID_COUNTRY);
    }

    return errors;
};
