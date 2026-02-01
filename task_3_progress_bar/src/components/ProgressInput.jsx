export default function ProgressInput({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>
        {label}:{" "}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ width: "80px", marginLeft: "10px" }}
        />
      </label>
    </div>
  );
}
