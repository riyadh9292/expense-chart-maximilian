import "./App.css";
import Card from "./components/card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useState } from "react";

function App() {
  const [expenses, setExpense] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: 954.12,
      date: new Date(2021, 1, 14)
    },
    {
      id: "e3",
      title: "football",
      amount: 20.12,
      date: new Date(2020, 7, 27)
    }
  ]);
  const addToExpense = data => {
    //adding new expense
    setExpense(prevState => {
      return [data, ...prevState];
    });
  };
  return (
    <Card className="App">
      <NewExpense addToExpense={addToExpense} />
      <Expenses items={expenses} />
    </Card>
  );
}

export default App;
