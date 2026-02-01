export default function TimerControls({
  status,
  onStart,
  onPause,
  onResume,
  onReset
}) {
  return (
    <div style={{ marginTop: "20px" }}>
      {status === "Idle" && <button onClick={onStart}>Start</button>}

      {status === "Running" && <button onClick={onPause}>Pause</button>}

      {status === "Paused" && <button onClick={onResume}>Resume</button>}

      {(status === "Running" ||
        status === "Paused" ||
        status === "Completed") && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
