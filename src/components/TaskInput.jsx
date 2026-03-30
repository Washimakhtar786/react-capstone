import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;