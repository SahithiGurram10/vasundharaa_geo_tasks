import { useEffect, useRef, useState } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";
import "./App.css";


const STORAGE_KEY = "advanced_timer";

export default function App() {
  const [inputSeconds, setInputSeconds] = useState(10);
  const [remainingMs, setRemainingMs] = useState(10000);
  const [status, setStatus] = useState("Idle"); 

  const intervalRef = useRef(null);
  const endTimeRef = useRef(null);

  /* ---------- Restore on Page Refresh ---------- */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

    const { endTime, remainingMs, status, inputSeconds } = saved;
    setInputSeconds(inputSeconds);

    if (status === "Running") {
      const diff = endTime - Date.now();
      if (diff > 0) {
        setRemainingMs(diff);
        setStatus("Running");
        startInterval(endTime);
      } else {
        completeTimer();
      }
    } else {
      setRemainingMs(remainingMs);
      setStatus(status);
    }
  }, []);

  /* ---------- Helper Functions ---------- */
  const saveState = (status, remainingMs, endTime = null) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status, remainingMs, endTime, inputSeconds })
    );
  };

  const startInterval = (endTime) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        completeTimer();
      } else {
        setRemainingMs(diff);
        saveState("Running", diff, endTime);
      }
    }, 10);
  };

  /* ---------- Button Actions ---------- */
  const startTimer = () => {
    const endTime = Date.now() + inputSeconds * 1000;
    endTimeRef.current = endTime;
    setRemainingMs(inputSeconds * 1000);
    setStatus("Running");
    startInterval(endTime);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setStatus("Paused");
    saveState("Paused", remainingMs);
  };

  const resumeTimer = () => {
    const endTime = Date.now() + remainingMs;
    endTimeRef.current = endTime;
    setStatus("Running");
    startInterval(endTime);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setRemainingMs(inputSeconds * 1000);
    setStatus("Idle");
    localStorage.removeItem(STORAGE_KEY);
  };

  const completeTimer = () => {
    clearInterval(intervalRef.current);
    setRemainingMs(0);
    setStatus("Completed");
    saveState("Completed", 0);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Advanced Countdown Timer</h2>

      <TimerInput
        value={inputSeconds}
        disabled={status === "Running" || status === "Paused"}
        onChange={setInputSeconds}
      />

      <TimerDisplay remainingMs={remainingMs} status={status} />

      <TimerControls
        status={status}
        onStart={startTimer}
        onPause={pauseTimer}
        onResume={resumeTimer}
        onReset={resetTimer}
      />
    </div>
  );
}
