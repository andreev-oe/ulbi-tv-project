import { IStateSchema } from 'app/providers/ReduxStore';

import { profileReadonlySelector } from './profileReadonlySelector';

describe('profileDataSelector.test', () => {
    test('should return readonly', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(profileReadonlySelector(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileReadonlySelector(state as IStateSchema)).toEqual(undefined);
    });
});
