import React from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";
import usePersistentTimer from "./hooks/usePersistentTimer";

const App = () => {
  const {
    inputSeconds,
    setInputSeconds,
    remainingTime,
    status,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    isCompleted
  } = usePersistentTimer(10);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Advanced Countdown Timer</h2>

      <TimerInput
        value={inputSeconds}
        onChange={setInputSeconds}
        disabled={status === "Running" || status === "Paused"}
      />

      <TimerDisplay
        remainingTime={remainingTime}
        status={status}
        isCompleted={isCompleted}
      />

      <TimerControls
        status={status}
        isCompleted={isCompleted}
        onStart={startTimer}
        onPause={pauseTimer}
        onResume={resumeTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default App;
