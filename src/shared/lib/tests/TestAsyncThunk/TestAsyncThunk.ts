import { AsyncThunkAction } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/ReduxStore';
import axios, { AxiosStatic } from 'axios';

type TActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => IStateSchema;

    actionCreator: TActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(actionCreator: TActionCreatorType<Return, Arg, RejectedValue>, state?: TDeepPartial<IStateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as IStateSchema);
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
        });

        return result;
    }
}
