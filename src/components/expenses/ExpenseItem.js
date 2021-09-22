import React from "react";
import Card from "../card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  const date = new Date(props.item.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card className="expense-item__container">
      <div className="expense-item__date">
        <ExpenseDate month={month} day={day} date={date} />
      </div>
      <div className="expense-item__costlist">
        <h2 className="expense-item__title">{props.item.title}</h2>
        <div className="expense-item__amount">{props.item.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
