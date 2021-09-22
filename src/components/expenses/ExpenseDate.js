import React from "react";

const ExpenseDate = props => {
  return (
    <div className="">
      <div className="">{props.month}</div>
      <div className="">{props.day}</div>
      <div className="">{props.date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
