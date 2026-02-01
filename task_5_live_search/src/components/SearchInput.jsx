const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search names..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
