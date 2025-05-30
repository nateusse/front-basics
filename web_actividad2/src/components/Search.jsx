function Search({ value, onChange }) {
  return (
    <input
      type="text"
      id="search"
      placeholder="Search restaurants..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default Search;