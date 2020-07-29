import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transaction :[] 
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);

    function deleteTransaction(id) {
        dispatch({
            type : 'Del_transac',
            payload : id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type : 'add_transac',
            payload : transaction
        });
    }

    return(
        <GlobalContext.Provider value = {
            { 
                transactions : state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}