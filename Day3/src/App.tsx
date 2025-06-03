import { useState } from "react";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 2000, category: "Groceries" },
    { id: 2, description: "Utilities", amount: 1500, category: "Utilities" },
    {
      id: 3,
      description: "Entertainment",
      amount: 3000,
      category: "Entertainment",
    },
  ]);

  const visibileExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <ExpenseList
        expenses={visibileExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
