import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Weed Spending",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Jumbo Chicken",
      amount: 20,
      category: "Groceries",
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
      category: "Entertainment",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    console.log(id);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseFilter onSelectCategory={(ca) => setSelectedCategory(ca)} />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
