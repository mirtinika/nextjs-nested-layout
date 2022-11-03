import { StoreAction, StoreState } from './store';
import { SET_COUNTER, SET_TASKS } from './actions';

const AppReducer = (state: StoreState, action: StoreAction) => {
    switch (action.type) {
        case SET_COUNTER:
            return { ...state, counter: action.payload.counter };
        case SET_TASKS:
            return { ...state, tasks: action.payload.tasks };
    }
};

export const reducer = (state: StoreState, action: StoreAction) => AppReducer(state, action);
