import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

export enum EValidateProfileError {
    INVALID_USER_DATA = 'INVALID_USER_DATA',
    INVALID_AGE = 'INVALID_AGE',
    INVALID_COUNTRY = 'INVALID_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface IProfile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: ECurrency;
    country?: ECountry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    formData?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validationErrors?: EValidateProfileError[];
}
