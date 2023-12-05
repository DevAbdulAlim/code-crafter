"use client";
interface SortfilterProps {
  sortOptions: string[];
  onSortChange: (selectedSort: string) => void;
}

const SelectInput: React.FC<SortfilterProps> = ({
  sortOptions,
  onSortChange,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    onSortChange(selectedSort);
  };
  return (
    <select
      aria-label="sort"
      className="px-4 py-2 border border-gray-300 rounded focus:outline-none ml-2"
      onChange={handleSortChange}
    >
    <option value="">Select an option</option>
      {sortOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
