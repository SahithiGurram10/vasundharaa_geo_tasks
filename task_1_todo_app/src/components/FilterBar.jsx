function FilterBar({ currentFilter, onChangeFilter }) {
  return (
    <div className="filter-bar">
      {["All", "Active", "Completed"].map((f) => (
        <button
          key={f}
          className={currentFilter === f ? "active" : ""}
          onClick={() => onChangeFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
