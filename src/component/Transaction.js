import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

export const Transaction = ({transac}) => {
    const sign = transac.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className = {transac.amount < 0 ? 'minus' : 'plus'}>
             {transac.text} <span>{sign}${Math.abs(transac.amount)}</span>
             <button onClick = {() => deleteTransaction(transac.id)} className="delete-btn">x</button>
        </li>
    )
}
