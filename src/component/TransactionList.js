import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    
    const { transactions } = useContext(GlobalContext); 
    //transactions is a value of global context provider

    return (
        <>
            <h3>History</h3>
            <ul className = "list">
                { transactions.map(transac => ( <Transaction transac = {transac} key = {transac.id}/> ))}
                
            </ul>
        </>
    )
}
