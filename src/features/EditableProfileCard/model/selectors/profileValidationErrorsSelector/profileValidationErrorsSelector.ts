import type { IStateSchema } from 'app/providers/ReduxStore';

export const profileValidationErrorsSelector = (state: IStateSchema) => state?.profile?.validationErrors;
