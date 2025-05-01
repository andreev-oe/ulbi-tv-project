import { IStateSchema } from 'app/providers/ReduxStore';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

import { profileFormDataSelector } from './profileFormDataSelector';

describe('profileDataSelector.test', () => {
    test('should return data', () => {
        const data = {
            username: 'John Doe',
            country: ECountry.Armenia,
            first: 'John',
            lastname: 'Doe',
            currency: ECurrency.USD,
            age: 25,
            city: 'Yerevan',
        };
        const state: TDeepPartial<IStateSchema> = {
            profile: {
                formData: data,
            },
        };
        expect(profileFormDataSelector(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileFormDataSelector(state as IStateSchema)).toEqual(undefined);
    });
});
