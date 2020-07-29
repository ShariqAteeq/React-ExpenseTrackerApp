import React from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';

import {ContextProvider} from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <div>
      <ContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </ContextProvider>
    </div>
  );
}

export default App;
