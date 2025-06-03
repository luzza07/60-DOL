import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form className="max-w-lg mx-auto mt-12 bg-gradient-to-br from-white via-indigo-50 to-purple-100 border border-purple-200 shadow-lg rounded-3xl px-10 py-8 space-y-7">
      <h2 className="text-3xl font-bold text-purple-700 text-center mb-2">
        💸 Add Expense
      </h2>
      <p className="text-center text-sm text-purple-500">
        Track your spending and stay on budget
      </p>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-purple-600 mb-1"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="e.g. Grocery shopping"
          className="w-full px-4 py-2 rounded-xl border border-purple-300 bg-white text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-semibold text-purple-600 mb-1"
        >
          Amount
        </label>
        <input
          id="amount"
          type="number"
          placeholder="e.g. 200"
          className="w-full px-4 py-2 rounded-xl border border-purple-300 bg-white text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-semibold text-purple-600 mb-1"
        >
          Category
        </label>
        <select
          id="category"
          className="w-full px-4 py-2 rounded-xl border border-purple-300 bg-white text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-xl hover:brightness-110 hover:shadow-md transition"
      >
        🚀 Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
