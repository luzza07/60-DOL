interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="overflow-x-auto mt-10 max-w-5xl mx-auto border border-gray-200 rounded-xl shadow-md">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-800">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white sticky top-0 z-10">
          <tr>
            <th className="px-6 py-4 border-r border-blue-500">Description</th>
            <th className="px-6 py-4 border-r border-blue-500">Amount (Rs.)</th>
            <th className="px-6 py-4 border-r border-blue-500">Category</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className="hover:bg-indigo-50 transition border-t border-gray-200"
            >
              <td className="px-6 py-4 border-r">{expense.description}</td>
              <td className="px-6 py-4 border-r">Rs. {expense.amount.toFixed(2)}</td>
              <td className="px-6 py-4 border-r">{expense.category}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => onDelete(expense.id)}
                  className="bg-red-100 text-red-600 border border-red-300 px-3 py-1 rounded hover:bg-red-200 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50 font-semibold text-gray-900 border-t border-gray-300">
          <tr>
            <td className="px-6 py-4 border-r">Total</td>
            <td className="px-6 py-4 border-r">Rs. {totalAmount.toFixed(2)}</td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
