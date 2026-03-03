import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const topNav = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/scan/scan-1", label: "Scans" },
  { to: "/schedule", label: "Schedule" },
];

const bottomNav = [
  { to: "/notifications", label: "Notifications" },
  { to: "/settings", label: "Settings" },
  { to: "/support", label: "Support" },
];

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = "block px-4 py-2 rounded-md text-sm font-medium transition";

  const activeClass =
    "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400";
  const inactiveClass =
    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";

  const getClass = ({ isActive }) =>
    `${linkClass} ${isActive ? activeClass : inactiveClass}`;

  return (
    <aside className="w-64 hidden md:flex flex-col justify-between bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-gray-800 p-4 h-screen sticky top-0">
      <div>
        <div className="mb-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <Link to="/">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              aps
            </h2>
          </Link>
        </div>

        <nav className="flex flex-col gap-1">
          {topNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={getClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />

        <nav className="flex flex-col gap-1">
          {bottomNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={getClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div>
        <button
          onClick={toggleTheme}
          className="w-full mb-4 px-4 py-2 rounded-md text-sm font-medium bg-gray-900 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              admin@edu.com
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Security Lead
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
