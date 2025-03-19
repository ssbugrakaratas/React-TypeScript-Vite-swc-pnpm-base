// Tema ayarları (styled-components, tailwind vb.)
import { createTheme } from "@mui/material/styles";

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

export const getMuiTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#1e90ff" : "#007bff",
      },
      secondary: {
        main: mode === "dark" ? "#b0bec5" : "#6c757d",
      },
      background: {
        default: mode === "dark" ? "#202020" : "#e9f7fe",
        paper: mode === "dark" ? "#2d2d2d" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
  });
};
