import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-text">No tasks available</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
