import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export function About() {
  const themeContext = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: themeContext.theme.background }}>
      <h2 style={{ color: themeContext.theme.foreground }}>About</h2>
      <button onClick={themeContext.toggleTheme}>Muda Tema</button>
    </div>
  );
}
