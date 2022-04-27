import React, { useState } from 'react';
import './expenses.css';
import ExpenseList from '../expenseFilter/ExpenseList';
import ExpenseFilter from '../expenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('')

  const changeFilterHandler = (chosenYear) => {
    setSelectedYear(chosenYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter 
      onChangeFilter={changeFilterHandler} 
      selected={selectedYear}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList allItems={props.items} filteredItems={filteredExpenses} selectedYear={selectedYear}/>
      
      
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