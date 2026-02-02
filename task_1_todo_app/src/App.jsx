import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import useLocalStorage from "./hooks/useLocalStorage";
import "./index.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "All");

  const addTask = (text, priority) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, priority, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <>
      <Navbar />

      <div className="main-container">
        
        <div className="card">
          <h3>Add Task</h3>
          <TodoForm onAddTask={addTask} />
        </div>

        
        <div className="card">
          <h3>My Tasks</h3>
          <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
          <TodoList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
