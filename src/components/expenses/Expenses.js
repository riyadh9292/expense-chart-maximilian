import React from "react";
import { useState } from "react";
import SelectYear from "../selectYear/SelectYear";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState("");
  const yearChangeHandler = year => {
    setSelectedYear(year);
  };
  //getting all the year matched expenses
  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === selectedYear
  );

  const content = selectedYear ? ( //if user select a year but there is no expenses
    filteredExpenses.length === 0 ? (
      <p>No expense found</p>
    ) : (
      filteredExpenses.map(item => <ExpenseItem key={item.id} item={item} />)
    )
  ) : (
    //user don't select any year,than show all the expenses,but this time chart cann't be shown.
    props.items.map(item => <ExpenseItem key={item.id} item={item} />)
  );
  return (
    <div>
      <SelectYear yearChangeHandler={yearChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      {content}
    </div>
  );
};

export default Expenses;
