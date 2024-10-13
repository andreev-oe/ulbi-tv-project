import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { IProfileSchema, updateProfileData } from 'entities/Profile';
import { EValidateProfileError } from 'entities/Profile/model/types/types';

import { profileActions, profileReducer } from './profileSlice';

const data = {
    id: '1',
    username: 'John Doe',
    country: ECountry.Armenia,
    first: 'John',
    lastname: 'Doe',
    currency: ECurrency.USD,
    age: 25,
    city: 'Yerevan',
};

describe('loginSlice.test', () => {
    test('Устанавливает readonly', () => {
        const state: TDeepPartial<IProfileSchema> = { readonly: false };
        expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });

    test('Проверяет cancelEdit', () => {
        const state: TDeepPartial<IProfileSchema> = { data, formData: { username: '' } };

        expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validationErrors: undefined,
            data,
            formData: data,
        });
    });

    test('Проверяет updateProfile', () => {
        const state: TDeepPartial<IProfileSchema> = { formData: { username: '123' } };

        expect(
            profileReducer(
                state as IProfileSchema,
                profileActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            formData: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: TDeepPartial<IProfileSchema> = {
            isLoading: false,
            validationErrors: [EValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validationErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: TDeepPartial<IProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validationErrors: undefined,
            readonly: true,
            validateError: undefined,
            formData: data,
            data: data,
        });
    });
});
