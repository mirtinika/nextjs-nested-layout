// React
import { StoreAction, storeInitialState, StoreState } from './store';
import { createContext, Dispatch } from 'react';

type CreateContext = {
    state: StoreState;
    dispatch: Dispatch<StoreAction>;
};

const Context = createContext<CreateContext>({ state: storeInitialState, dispatch: () => null });

export default Context;
