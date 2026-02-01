const TimerControls = ({
  status,
  isCompleted,
  onStart,
  onPause,
  onResume,
  onReset
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {!isCompleted && status === "Idle" && (
        <button onClick={onStart}>Start</button>
      )}

      {status === "Running" && (
        <button onClick={onPause}>Pause</button>
      )}

      {status === "Paused" && (
        <button onClick={onResume}>Resume</button>
      )}

      {(status === "Running" || status === "Paused") && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default TimerControls;
