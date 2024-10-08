import { ECurrency } from 'entities/Currency';
import { ECountry } from 'shared/consts/common';

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
}