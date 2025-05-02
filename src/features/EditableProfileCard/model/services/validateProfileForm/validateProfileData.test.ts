import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

import { EValidateProfileError } from '../../types/types';

import { validateProfileForm } from './validateProfileForm';

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

describe('loginByUsername.test', () => {
    test('Все корректно', async () => {
        const result = validateProfileForm(data);

        expect(result).toEqual([]);
    });

    test('Некорректние имя и фамилия', async () => {
        const result = validateProfileForm({ ...data, first: '', lastname: '' });

        expect(result).toEqual([EValidateProfileError.INVALID_USER_DATA]);
    });

    test('Некорректный возраст', async () => {
        const result = validateProfileForm({ ...data, age: undefined });

        expect(result).toEqual([EValidateProfileError.INVALID_AGE]);
    });

    test('Некорректные возраст, страна, имя или фамилия', async () => {
        const result = validateProfileForm({ ...data, first: '', lastname: '', country: undefined, age: undefined });

        expect(result).toEqual([
            EValidateProfileError.INVALID_USER_DATA,
            EValidateProfileError.INVALID_AGE,
            EValidateProfileError.INVALID_COUNTRY,
        ]);
    });
});
