type ExpenseFilterProps = {
  onSelectCategory: (category: string) => void;
};

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option selected value="">
        Open this select menu
      </option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
