import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    onAddTask(taskText, priority);
    setTaskText("");
    setPriority("Medium");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
