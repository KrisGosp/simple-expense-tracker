import { useState } from "react";
import ExpenseList from "./ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Weed Spending",
      amount: 10,
      category: "Entertainement",
    },
    {
      id: 2,
      description: "Jumbo Chicken",
      amount: 20,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Furniture",
      amount: 50,
      category: "Utilities",
    },
    {
      id: 4,
      description: "League",
      amount: 10,
      category: "Entertainement",
    },
  ]);

  const handleDelete = (id: number) => {
    const filteredExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(filteredExpenses);
    console.log(id);
  };

  // const filteredExpenses =

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
