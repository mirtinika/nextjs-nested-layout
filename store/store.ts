// Constants
import { SET_COUNTER, SET_TASKS } from './actions';

type Task = {
    description: string;
    slug: string;
};
export type StoreState = {
    counter: number;
    tasks: Array<Task>;
};
export type StoreAction =
    | { type: typeof SET_COUNTER; payload: { counter: number } }
    | { type: typeof SET_TASKS; payload: { tasks: Array<Task> } };

export type StoreReducer = (state: StoreState, action: StoreAction) => StoreState;

export const storeInitialState: StoreState = {
    counter: 0,
    tasks: [],
};
