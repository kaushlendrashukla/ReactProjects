import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setisEditing ] = useState(false)

const SaveExpenseDataHandler = (enteredExpenseData) => {
const expenseData = {
  ...enteredExpenseData,
  id: Math.random().toString(),

};
props.onAddExpense(expenseData);
setisEditing(false)
};
const startEditingHandler = () => {
  setisEditing(true);
}

const stopEditingHandler = () => {
  setisEditing(false);
}
    return(
        <div>
         {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
         {isEditing && <ExpenseForm  onSaveExpenseData={SaveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    );
};
 export default NewExpense;