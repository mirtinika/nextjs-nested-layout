// React
import { FC, useContext, useReducer } from 'react';
// Context
import StoreContext from './context';
// Reducer
import { reducer } from './reducer';
// Store
import { storeInitialState, StoreReducer } from './store';

type StoreProviderProps = {
    children: React.ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer<StoreReducer>(reducer, storeInitialState);

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

const useStoreContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider, useStoreContext };
