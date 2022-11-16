import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseAmount from "./UI/ExpenseAmount.js";
//import Card from "./UI/Card.js";

const ExpenseItem = (props) => {
   let [title,setTitle]  = useState(props.title);
   let [amount,setAmount] = useState(props.amount)
   //let [amount,setAmount] = useState(props.amount);
   
   let clickhandler = () => {
      setTitle('updated'); 
      console.log(title)
   }
   let amountHandler = () => {
      setAmount('$100');
      console.log('amountClicked')
   }
   return (
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="location">{props.location}</div>
         <div className="expense-item__description">
            {/* <h2>  <ExpenseDetails title={props.title} /> </h2> */}
            <h2>{title}</h2>
            <div className="expense-item__price">{amount}</div>
         </div>
         <button onClick={amountHandler}>Expense</button>
         <button onClick={clickhandler}>Title</button>

      </div>
   );
}

export default ExpenseItem;