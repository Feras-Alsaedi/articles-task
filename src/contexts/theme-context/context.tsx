"use client";

import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

type ThemeType = "light" | "dark";

interface IInternalState {
  theme: ThemeType;
  setTheme: (themeType: ThemeType) => void;
}

export const ThemeContext = createContext<IInternalState>({
  theme: "light",
  setTheme: () => null,
});

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    setTheme(storedTheme || "light");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null; // 🧠 Prevent rendering until client-side

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
