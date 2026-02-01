export default function SubProgressBar({ percentage }) {
  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.bar,
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    height: "8px",
    backgroundColor: "#eee",
    borderRadius: "4px",
    marginBottom: "6px",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#3498db",
    transition: "width 0.3s ease",
  },
};
