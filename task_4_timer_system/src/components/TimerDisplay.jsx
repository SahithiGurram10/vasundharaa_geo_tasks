const TimerDisplay = ({ remainingTime, status, isCompleted }) => {
  const seconds = (remainingTime / 1000).toFixed(3);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Time Remaining: {seconds}s</h3>
      <p>Status: {status}</p>
      {isCompleted && <h2>⏰ Time’s up!</h2>}
    </div>
  );
};

export default TimerDisplay;
