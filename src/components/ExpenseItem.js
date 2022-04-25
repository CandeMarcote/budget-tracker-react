import React from 'react';
import './expenseItem.css';

const ExpenseItem = () => {
  const date = new Date(2022, 4, 25)
  return (
    <div className="expense-item">
        <div>{date.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>expense item name</h2>
          <div className='expense-item__price'>$price</div>
        </div>
    </div>
  )
}

export default ExpenseItem