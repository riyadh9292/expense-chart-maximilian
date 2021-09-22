import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = props => {
  /* states for title date and amount */
  /*  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(""); */
  /* one state instead of multiple states */
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  });
  /* functions that update states */
  const amountChangeHandler = e => {
    /* wrong way to update state. */
    /* setUserInput({
      amount: e.target.value,
      ...userInput //that copy the other features of this object
    }); */
    /* this ensures the latest state to update always */
    setUserInput(prevState => {
      return {
        ...prevState,
        amount: e.target.value
      };
    });
  };
  const titleChangeHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        title: e.target.value
      };
    });
  };
  const dateChangeHandler = e => {
    setUserInput(prevState => {
      return {
        ...prevState,
        date: new Date(e.target.value) //changing to date to get Year in Expenses.js file
      };
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            min="0.01"
            step="10"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            /* value={userInput.date.toString()} */
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
