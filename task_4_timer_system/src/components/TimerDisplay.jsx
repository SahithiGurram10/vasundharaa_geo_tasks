export default function TimerDisplay({ remainingMs, status }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Remaining Time: {(remainingMs / 1000).toFixed(3)} s</h3>
      <p>Status: {status}</p>
      {status === "Completed" && <h2>⏰ Time’s up!</h2>}
    </div>
  );
}
