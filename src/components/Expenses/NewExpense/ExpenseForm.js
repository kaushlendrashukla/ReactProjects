import React from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
   // document.getElementById('').addEventListener('click', () => {})

    const titleChangeHandler =(event) => {
console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }
const dateChangeHandler = (event) => {
    console.log(event.target.value);
}
    return (
        <div className="formlayout">
            <form className="formlayout">
                <div className="formlayout">
                    <div className="title">
                        <label>Title:-</label>
                        <input type='text' onChange= {titleChangeHandler} />
                    </div>
                    <div className="amount">
                        <label>Amount:-</label>
                        <input type='number'  onChange= {amountChangeHandler} />
                    </div>
                    <div className="date">
                        <label>Date:</label>
                        <input type='date' min="2019-01-01" max="2023-12-31"  onChange= {dateChangeHandler}/>
                    </div>
                </div>
                <div >
                    <button className="form_button" type ="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;