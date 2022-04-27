import React, { useState } from 'react';
import './expenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input id='title' type="text" onChange={titleChangeHandler} value={enteredTitle} placeholder="Was this purchase really necessary?"/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input id='amount' type="number" onChange={amountChangeHandler} step={0.01} min={0.01} value={enteredAmount} placeholder="Wow, expensive!"/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input id='date' type="date" onChange={dateChangeHandler} value={enteredDate} min="2019 01 01" max="2022 12 31"/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add</button>
            <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
    </form>
  );
}

export default ExpenseForm