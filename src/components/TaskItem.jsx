import React from "react";

const TaskItem = React.memo(({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-3 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">

      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer text-lg ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </div>
  );
});

export default TaskItem;