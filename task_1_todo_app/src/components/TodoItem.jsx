function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
        <small className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </small>
      </div>

      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
