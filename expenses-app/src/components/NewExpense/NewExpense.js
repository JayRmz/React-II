import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const [buttonAddForm, setbuttonAddForm] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const addExpense = () => {
    setbuttonAddForm(false);
  };

  const cancelAddExpense = () => {
    setbuttonAddForm(true);
  };

  return (
    <div className="new-expense">
      {buttonAddForm ? (
        <button onClick={addExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddExpense}
        />
      )}
    </div>
  );
}
