//import logo from './logo.svg';
//import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
      location: 'delhi',
      date: new Date(2022, 11, 11),
    },
    {
      id: 'e3',
      title: 'food',
      amount: 312,
      location: 'delhi',
      date: new Date(2022, 11, 11),
    },
    {
      id: 'e4',
      title: 'fun',
      amount: 412,
      location: 'delhi',
      date: new Date(2022, 11, 11),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>

      {expenses.map((el, index) => <ExpenseItem title={expenses[index].title} amount={expenses[index].amount} location={expenses[index].location} date={expenses[index].date}></ExpenseItem>)}

    </div>
  );
}



export default App;
