export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export function isSameTheme(theme1, theme2) {
  return (
    theme1.foreground === theme2.foreground &&
    theme1.background === theme2.background
  );
}
