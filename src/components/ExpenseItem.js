import "./ExpenseItem.css";

function ExpenseItem(props) {
   // const expensedate = new Date(2022, 11, 11);
   // const expensetitle = 'car insurance';
   // const expenseamount = 455;
   //const LocationOfExpenditure = "cinema"

   return (
      <div className="expense-item">
         <div>
            <div>{props.date.toISOString()}</div>

         </div>
         <div className="location">{props.location}</div>

         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
         </div>

      </div>
   );
}

export default ExpenseItem;