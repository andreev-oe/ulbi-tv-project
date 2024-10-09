import { IStateSchema } from 'app/providers/ReduxStore';
import { profileValidationErrorsSelector } from 'entities/Profile';
import { EValidateProfileError } from 'entities/Profile/model/types/types';

describe('profileDataSelector.test', () => {
    test('should work with filled state', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: {
                validationErrors: [EValidateProfileError.SERVER_ERROR, EValidateProfileError.INVALID_AGE],
            },
        };
        expect(profileValidationErrorsSelector(state as IStateSchema)).toEqual([
            EValidateProfileError.SERVER_ERROR,
            EValidateProfileError.INVALID_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(profileValidationErrorsSelector(state as IStateSchema)).toEqual(undefined);
    });
});
