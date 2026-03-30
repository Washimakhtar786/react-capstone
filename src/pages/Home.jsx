import { useTheme } from "../context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome 👋</h1>

      <p className="mb-4 text-lg">Current Theme: {theme}</p>

      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;