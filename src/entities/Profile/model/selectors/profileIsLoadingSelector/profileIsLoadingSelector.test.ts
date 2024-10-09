import { IStateSchema } from 'app/providers/ReduxStore';
import { profileIsLoadingSelector } from 'entities/Profile';

describe('profileDataSelector.test', () => {
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(profileIsLoadingSelector(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileIsLoadingSelector(state as IStateSchema)).toEqual(undefined);
    });
});
