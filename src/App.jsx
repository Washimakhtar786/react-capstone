import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Tasks = lazy(() => import("./pages/Tasks"));

function Layout() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">

        {/* ✅ Toast should be INSIDE return */}
        <Toaster position="top-right" />

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <div className="space-x-4">
            <Link className="font-semibold hover:text-blue-500" to="/">Home</Link>
            <Link className="font-semibold hover:text-blue-500" to="/tasks">Tasks</Link>
          </div>
        </nav>

        {/* Pages */}
        <div className="p-6">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </Suspense>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider> {/* ✅ ADDED HERE */}
        <BrowserRouter> {/* ✅ REQUIRED */}
          <Layout />
        </BrowserRouter>
      </TaskProvider>
    </ThemeProvider>
  );
}