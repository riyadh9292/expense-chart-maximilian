import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const saveExpenseData = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.addToExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={
          saveExpenseData
        } /* communicating up by providing function */
      />
    </div>
  );
};

export default NewExpense;
