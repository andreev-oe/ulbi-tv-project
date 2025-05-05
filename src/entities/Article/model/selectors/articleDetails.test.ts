import type { IStateSchema } from 'app/providers/ReduxStore';

import {
    articleDetailsDataSelector,
    articleDetailsErrorSelector,
    articleDetailsIsLoadingSelector,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: TDeepPartial<IStateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(articleDetailsDataSelector(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(articleDetailsDataSelector(state as IStateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(articleDetailsErrorSelector(state as IStateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(articleDetailsErrorSelector(state as IStateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(articleDetailsIsLoadingSelector(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(articleDetailsIsLoadingSelector(state as IStateSchema)).toEqual(false);
    });
});
