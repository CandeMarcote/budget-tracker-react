import React, { useState } from 'react';
import './expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('')

  const changeFilterHandler = (chosenYear) => {
    setSelectedYear(chosenYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  let expenseContent = <p>You didn't buy anything, good job!</p>;
  if (filteredExpenses.length>0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} key={expense.id}/>
    ))
  } else if (selectedYear === "All") {
    expenseContent = props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter 
      onChangeFilter={changeFilterHandler} 
      selected={selectedYear}
      />
      {expenseContent}
      {/* THIS CAN ALSO BE USED
      filteredExpenses.length === 0 && <p>You didn't buy anything, good job!</p>}
      {filteredExpenses.length > 0 && 
      filteredExpenses.map((expense) => (
        <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} key={expense.id}/>
      ))} */}
      {/* THIS CAN ALSO BE USED
       {filteredExpenses.length == 0 ? (
      <p>You didn't buy anything, go=od job!</p>
      ) : (
        filteredExpenses.map((expense) => (
        <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} key={expense.id}/>
      ))
      )} */}
    </Card>
  )
}

export default Expenses