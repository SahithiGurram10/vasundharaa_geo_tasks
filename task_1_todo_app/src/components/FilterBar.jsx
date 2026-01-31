function FilterBar({ currentFilter, onChangeFilter }) {
  return (
    <div className="filters">
      {["All", "Active", "Completed"].map((type) => (
        <button
          key={type}
          className={currentFilter === type ? "active" : ""}
          onClick={() => onChangeFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
