import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg">

      {/* Left side (task text) */}
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      {/* Right side (delete button) */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;