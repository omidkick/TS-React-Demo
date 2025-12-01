type SelectProps<T> = {
  options: T[];
  onChange: (value: T) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
};

function Select<T>({
  options,
  onChange,
  getOptionLabel,
  getOptionValue,
}: SelectProps<T>) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find(
      (opt) => getOptionValue(opt) === e.target.value
    );
    if (selected) onChange(selected);
  };

  return (
    <select
      onChange={handleSelect}
      className="border border-primary rounded-sm p-2 w-full"
    >
      <option disabled selected>
        Select an option...
      </option>

      {options.map((option) => (
        <option key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
}

export default Select;
