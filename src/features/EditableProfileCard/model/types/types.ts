import type { ECountry } from 'entities/Country';
import type { ECurrency } from 'entities/Currency';

import type { EValidateProfileError } from '../consts/enums';

export interface IProfile {
    id?: string;
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
