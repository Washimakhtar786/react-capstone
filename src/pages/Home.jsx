import { useContext } from "react";
import { useTheme } from "../context/ThemeContext";
import { TaskContext } from "../context/TaskContext";

function Home() {
  const { theme, toggleTheme } = useTheme();

  // ✅ Get tasks from global context
  const { tasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Welcome 👋</h1>

      {/* Theme Section */}
      <p className="mb-2 text-lg">Current Theme: {theme}</p>

      <button
        onClick={toggleTheme}
        className="px-6 py-3 mb-8 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
      >
        Toggle Theme
      </button>

      {/* Tasks Section */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Your Tasks 📋
        </h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks yet. Go to Tasks page and add one 🚀
          </p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
              >
                <span
                  className={
                    task.completed ? "line-through text-gray-400" : ""
                  }
                >
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;