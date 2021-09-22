import React from "react";
import Chart from "../chart/Chart";

const ExpenseChart = props => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  /*here props.expenses provides all the filtered values.An Array .Single value looks like this  {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    } */
  for (const expense of props.expenses) {
    console.log(expense.date.getMonth());
    const expenseMonth = expense.date.getMonth(); //getMonth() return value 0 to 11
    chartDataPoints[expenseMonth].value += +expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
