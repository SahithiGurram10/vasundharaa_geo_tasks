const ResultCount = ({ count, query }) => {
  if (!query) return null;

  return count === 0 ? (
    <p>No matches found</p>
  ) : (
    <p>{count} results found</p>
  );
};

export default ResultCount;
