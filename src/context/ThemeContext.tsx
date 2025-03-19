import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getMuiTheme, applySavedTheme, toggleTheme } from "@styles/theme";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    applySavedTheme();
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
