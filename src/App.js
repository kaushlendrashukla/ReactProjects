import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyexpenese = [
  {
    id: 'e1',
    title: 'Cooler',
    amount: 4500,
    date: new Date(2022, 1, 14),
  },
  { 
    id: 'e2',
     title: 'New TV', 
     amount: 5500,
      date: new Date(2022, 2, 15),
     },
  {
    id: 'e3',
    title: 'Freez',
    amount: 3200,
    date: new Date(2022, 3, 16),
  },
  {
    id: 'e4',
    title: 'Desk',
    amount: 2100,
    date: new Date(2022, 4, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyexpenese);

  const addExpenseHandler = expense => {
   setExpenses( prevExpense => {
    return [expense, ...prevExpense] }
    )
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;