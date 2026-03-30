import { useReducer, useMemo, useCallback } from "react";
import { taskReducer, initialState } from "../reducer/taskReducer";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";

function Tasks() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Memoized filtered tasks
  const filteredTasks = useMemo(() => {
    if (state.filter === "completed") {
      return state.tasks.filter(t => t.completed);
    }
    if (state.filter === "pending") {
      return state.tasks.filter(t => !t.completed);
    }
    return state.tasks;
  }, [state.tasks, state.filter]);

  // Optimized handlers
  const addTask = useCallback((text) => {
    dispatch({ type: "ADD_TASK", payload: text });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
  <div className="max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>

    <TaskInput addTask={addTask} />
    <Filter setFilter={setFilter} />

    <TaskList
      tasks={filteredTasks}
      onDelete={deleteTask}
      onToggle={toggleTask}
    />
  </div>
);
}

export default Tasks;