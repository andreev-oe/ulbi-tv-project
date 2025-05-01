import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { EValidateProfileError } from 'features/EditableProfileCard/model/types/types';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { updateProfileData } from './updateProfileData';

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
    test('Запрос выполнен успешно', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Запрос выполнен, нет данных', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([EValidateProfileError.NO_DATA]);
    });

    test('Запрос выполнен, ошибка валидации', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: { ...data, age: undefined },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([EValidateProfileError.INVALID_AGE]);
    });
});
