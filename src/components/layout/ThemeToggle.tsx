import { useEffect, useState } from "react";
import { toggleTheme, applySavedTheme } from "@styles/theme";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    applySavedTheme();
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const handleClick = () => {
    toggleTheme();
    setTheme(localStorage.getItem("theme") || "light");
  };

  return (
    <button onClick={handleClick} className="theme-toggle">
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
