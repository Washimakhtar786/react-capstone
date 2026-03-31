import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";

function Tasks() {
  // ✅ Get global state from context
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TaskContext);

  // ✅ Only keep filter locally
  const [filter, setFilter] = useState("all");

  // ✅ Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Task Manager 🚀
        </h1>

        {/* Add Task */}
        <TaskInput addTask={addTask} />

        {/* Filters */}
        <Filter setFilter={setFilter} />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />

      </div>
    </div>
  );
}

export default Tasks;