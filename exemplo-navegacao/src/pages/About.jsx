import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export function About() {
  const theme = useStoreState((state) => state.theme);
  const toggleTheme = useStoreActions((state) => state.toggleTheme);
  return (
    <div style={{ backgroundColor: theme.background }}>
      <h2 style={{ color: theme.foreground }}>About</h2>
      <button onClick={toggleTheme}>Muda Tema</button>
    </div>
  );
}
