import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "./UI/Card.js";

const ExpenseItem = (props) => {

   return (
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="location">{props.location}</div>
         <div className="expense-item__description">
            <h2>  <ExpenseDetails title={props.title} /> </h2>
            <div className="expense-item__price">{props.amount}</div>
         </div>

      </div>
   );
}

export default ExpenseItem;