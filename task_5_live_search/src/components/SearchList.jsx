import { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import ResultCount from "./Resultount";
import HighlightedText from "./HighlightedText";

const NAMES = [
  "Sahithi Pratyusha",
  "Pratyusha Gurram",
  "Suresh Kumar",
  "Ramesh Kumar",
  "Anusha Reddy",
  "Kiran Pratyusha",
  "Prathyusha Sai",
  "Srinivas Rao"
];

const SearchList = () => {
  const [query, setQuery] = useState("");

  const filteredNames = useMemo(() => {
    return NAMES.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="search-container">
      <SearchInput value={query} onChange={setQuery} />

      <ResultCount count={filteredNames.length} query={query} />

      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>
            <HighlightedText text={name} highlight={query} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
