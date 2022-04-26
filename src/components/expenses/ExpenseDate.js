import React from 'react';
import './expenseDate.css';

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className='expense-date'>
        <span className='expense-date__month'>{month}</span>
        <span className='expense-date__day'>{day}</span>
        <span className='expense-date__year'>{year}</span>
    </div>
  )
}

export default ExpenseDate