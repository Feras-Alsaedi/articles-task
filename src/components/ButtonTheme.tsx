"use client";
import { ThemeContext } from "@/contexts/theme-context/context";
import { useContext } from "react";

const ButtonTheme: React.FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <svg
          className="flex grow h-10 hover:bg-gray-200 hover:text-white bg-gray-100 dark:bg-slate-400 dark:hover:bg-slate-500 dark:text-white hover:cursor-pointer transition-colors rounded-md p-1 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={1}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="h-10 flex grow hover:bg-gray-200 bg-gray-100 hover:cursor-pointer transition rounded-md p-1 text-yellow-400 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
};
export default ButtonTheme;
