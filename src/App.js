import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    // date: new Date(2020, 7, 14),
    date: new Date(2020, 7, 14),
  },
  {
    id: "e15",
    title: "Cooker",
    amount: 119.99,
    // date: new Date(2020, 7, 14),
    date: new Date(2020, 4, 14),
  },
  {
    id: "e16",
    title: "Book",
    amount: 119.99,
    // date: new Date(2020, 7, 14),
    date: new Date(2019, 2, 14),
  },
  {
    id: "e16",
    title: "Tablet",
    amount: 339.99,
    // date: new Date(2020, 7, 14),
    date: new Date(2022, 10, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <div style={{color:"white", textAlign:"center"}}>
        <h2>Expense Tracker Demo Instruction</h2>
        <p>- Click button Add New Expense</p>
        <p>- Input Data and click Add Expense</p>
        <p>- Choose the year on the dropdown list</p>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
