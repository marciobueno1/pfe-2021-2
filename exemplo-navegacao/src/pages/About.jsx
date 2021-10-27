import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export function About() {
  const themeMode = useStoreState((state) => state.theme.mode);
  const toggleTheme = useStoreActions((state) => state.theme.toggle);
  return (
    <div style={{ backgroundColor: themeMode.background }}>
      <h2 style={{ color: themeMode.foreground }}>About</h2>
      <button onClick={toggleTheme}>Muda Tema</button>
    </div>
  );
}
