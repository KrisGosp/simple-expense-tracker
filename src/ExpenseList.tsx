type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

type ExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  return (
    <table className="table table-bordered mt-5">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(exp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <td>
            {expenses.reduce((acc, expense) => {
              return (acc += expense.amount);
            }, 0)}
            $
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
