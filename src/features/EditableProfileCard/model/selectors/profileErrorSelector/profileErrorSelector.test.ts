import type { IStateSchema } from 'app/providers/ReduxStore';

import { profileErrorSelector } from './profileErrorSelector';

describe('profileDataSelector.test', () => {
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(profileErrorSelector(state as IStateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileErrorSelector(state as IStateSchema)).toEqual(undefined);
    });
});
