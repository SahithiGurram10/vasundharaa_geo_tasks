import { useState } from "react";
import ProgressInput from "./components/ProgressInput";
import MainProgressBar from "./components/MainProgressBar";
import SubProgressBar from "./components/SubProgressBar";

const clampValue = (value) => {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
};

export default function App() {
  const [values, setValues] = useState([30, 50, 80]);

  const handleChange = (index, newValue) => {
    const updatedValues = [...values];
    updatedValues[index] = clampValue(newValue);
    setValues(updatedValues);
  };

  const average =
    values.reduce((sum, val) => sum + val, 0) / values.length;

  return (
    <div style={styles.container}>
      <h2>React Progress Bar Task</h2>

      {values.map((value, index) => (
        <ProgressInput
          key={index}
          label={`Input ${index + 1}`}
          value={value}
          onChange={(val) => handleChange(index, val)}
        />
      ))}

      <MainProgressBar percentage={average} />

      <div style={{ marginTop: 20 }}>
        {values.map((value, index) => (
          <SubProgressBar key={index} percentage={value} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
  },
};
