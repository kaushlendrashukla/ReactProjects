import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    // document.getElementById('').addEventListener('click', () => {})
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInpt] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // console.log(event.target.value)
    }
    const amountChangeHandler = (event) => {
        // setUserInpt({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        // setUserInpt({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value)
    }
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),

        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <div className="formlayout">
            <form onSubmit={formSubmissionHandler} className="formlayout">
                <div className="formlayout">
                    <div className="title">
                        <label>Title:-</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="amount">
                        <label>Amount:-</label>
                        <input type='number' value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className="date">
                        <label>Date:</label>
                        <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div>
                    <button className="form_button" type='button' onClick={props.onCancel}>Cancel</button>
                </div>
                <div >
                    <button className="form_button" type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;