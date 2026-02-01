import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "advanced_timer_state";

const usePersistentTimer = (defaultSeconds) => {
  const [inputSeconds, setInputSeconds] = useState(defaultSeconds);
  const [remainingTime, setRemainingTime] = useState(defaultSeconds * 1000);
  const [status, setStatus] = useState("Idle"); // Idle | Running | Paused | Completed
  const timerRef = useRef(null);
  const endTimeRef = useRef(null);

  // Restore state on refresh
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

    const { endTime, status, remainingTime, inputSeconds } = saved;

    setInputSeconds(inputSeconds);

    if (status === "Running") {
      const diff = endTime - Date.now();
      if (diff > 0) {
        setRemainingTime(diff);
        setStatus("Running");
        startInterval(endTime);
      } else {
        completeTimer();
      }
    } else {
      setRemainingTime(remainingTime);
      setStatus(status);
    }
  }, []);

  const saveState = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const startInterval = (endTime) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        completeTimer();
      } else {
        setRemainingTime(diff);
        saveState({
          endTime,
          status: "Running",
          remainingTime: diff,
          inputSeconds
        });
      }
    }, 10);
  };

  const startTimer = () => {
    const endTime = Date.now() + inputSeconds * 1000;
    endTimeRef.current = endTime;
    setStatus("Running");
    setRemainingTime(inputSeconds * 1000);
    startInterval(endTime);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setStatus("Paused");
    saveState({
      status: "Paused",
      remainingTime,
      inputSeconds
    });
  };

  const resumeTimer = () => {
    const endTime = Date.now() + remainingTime;
    endTimeRef.current = endTime;
    setStatus("Running");
    startInterval(endTime);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setRemainingTime(inputSeconds * 1000);
    setStatus("Idle");
    localStorage.removeItem(STORAGE_KEY);
  };

  const completeTimer = () => {
    clearInterval(timerRef.current);
    setRemainingTime(0);
    setStatus("Completed");
    saveState({
      status: "Completed",
      remainingTime: 0,
      inputSeconds
    });
  };

  return {
    inputSeconds,
    setInputSeconds,
    remainingTime,
    status,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    isCompleted: status === "Completed"
  };
};

export default usePersistentTimer;
