function Filter({ setFilter }) {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex gap-3 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition"
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default Filter;