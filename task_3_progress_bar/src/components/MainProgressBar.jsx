const getColor = (percentage) => {
  if (percentage < 40) return "#e74c3c";
  if (percentage < 70) return "#f39c12";
  return "#2ecc71";
};

export default function MainProgressBar({ percentage }) {
  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.bar,
          width: `${percentage}%`,
          backgroundColor: getColor(percentage),
        }}
      />
      <span style={styles.text}>{Math.round(percentage)}%</span>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "25px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    marginTop: "20px",
  },
  bar: {
    height: "100%",
    transition: "width 0.4s ease",
  },
  text: {
    position: "absolute",
    top: "3px",
    right: "10px",
    fontSize: "14px",
  },
};
