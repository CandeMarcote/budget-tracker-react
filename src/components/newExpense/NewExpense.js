import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(true)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString()
    }

    props.onAddExpenseData(expenseData)
  }

  const addBtnHandler = () => {
    setIsAddExpense(!isAddExpense)
  }

  const showAddExpenseHandler = () => {
    setIsAddExpense(!isAddExpense)
  }

  return (
    <div className="new-expense">
      {isAddExpense && <button type='click' onClick={addBtnHandler}>Add new expense</button>}
      {!isAddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showAddExpenseHandler}/>}
    </div>
  )
}

export default NewExpense