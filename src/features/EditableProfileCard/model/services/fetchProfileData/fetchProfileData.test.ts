import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfileData } from './fetchProfileData';

describe('loginByUsername.test', () => {
    test('Запрос выполнен успешно', async () => {
        const data = {
            username: 'John Doe',
            country: ECountry.Armenia,
            first: 'John',
            lastname: 'Doe',
            currency: ECurrency.USD,
            age: 25,
            city: 'Yerevan',
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Запрос выполнен, ответ код 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
