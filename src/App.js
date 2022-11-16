//import logo from './logo.svg';
//import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 12,
      location: 'delhi',
      date: new Date(2022, 11, 11),
    },
    {
      id: 'e2',
      title: 'movie',
      amount: 120,
      location: 'Mumbai',
      date: new Date(2022, 11, 11),
    },
    {
      id: 'e3',
      title: 'food',
      amount: 312,
      location: 'Banglore',
      date: new Date(2022, 11, 11),
    },
    {
      id: 'e4',
      title: 'fun',
      amount: 412,
      location: 'pune',
      date: new Date(2022, 11, 11),
    },
  ];
  // {expenses.map((el, index) => <ExpenseItem title={expenses[index].title} amount={expenses[index].amount} location={expenses[index].location} date={expenses[index].date}></ExpenseItem>)}

  return (
    <div>
      <h2>Expense Tracker</h2>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} location={expenses[3].location} date={expenses[3].date}></ExpenseItem> */}
      {expenses.map((el, index) => <ExpenseItem title={expenses[index].title} amount={expenses[index].amount} location={expenses[index].location} date={expenses[index].date}></ExpenseItem>)}




    </div>
  );
}



export default App;
