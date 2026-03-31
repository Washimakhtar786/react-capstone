function Filter({ setFilter }) {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex justify-center gap-3 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default Filter;