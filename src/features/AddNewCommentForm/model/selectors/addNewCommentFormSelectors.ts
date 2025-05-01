import { IStateSchema } from 'app/providers/ReduxStore';

export const addNewCommentFormTextSelector = (state: IStateSchema) => state.addNewCommentForm?.text ?? '';
export const addNewCommentFormErrorSelector = (state: IStateSchema) => state.addNewCommentForm?.error;
