import type { IStateSchema } from 'app/providers/ReduxStore';

import { EValidateProfileError } from '../../consts/enums';

import { profileValidationErrorsSelector } from './profileValidationErrorsSelector';

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
