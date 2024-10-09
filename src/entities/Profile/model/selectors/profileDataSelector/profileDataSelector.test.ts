import { IStateSchema } from 'app/providers/ReduxStore';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { profileDataSelector } from 'entities/Profile';

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
                data,
            },
        };
        expect(profileDataSelector(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileDataSelector(state as IStateSchema)).toEqual(undefined);
    });
});
