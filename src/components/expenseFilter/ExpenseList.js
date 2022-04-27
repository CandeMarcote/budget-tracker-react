import React from 'react';
import './expenseList.css';
import ExpenseItem from '../expenses/ExpenseItem';

const ExpenseList = (props) => {
    
    if (props.selectedYear==="All") {
        return props.allItems.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>)
    }

    if (props.filteredItems.length===0) {
        return <p>You didn't buy anything, good job!</p>
    }

    return (
        <>
        {props.filteredItems.map((expense) => (
        <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} key={expense.id}/>
        ))}
        </>
    )
}

export default ExpenseList