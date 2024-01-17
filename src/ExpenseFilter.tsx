import { categories } from "../categories.ts";

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
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
