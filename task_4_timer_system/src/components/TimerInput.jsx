export default function TimerInput({ value, onChange, disabled }) {
  const handleChange = (e) => {
    const val = e.target.value;
    if (/^\d+$/.test(val) && Number(val) > 0) {
      onChange(Number(val));
    }
  };

  return (
    <div>
      <label>Start Time (seconds): </label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}
