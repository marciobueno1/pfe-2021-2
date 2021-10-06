import { action, createStore } from "easy-peasy";

import { themes, isSameTheme } from "./themes";

export const store = createStore({
  theme: themes.dark,
  toggleTheme: action((state) => {
    state.theme = isSameTheme(state.theme, themes.dark)
      ? themes.light
      : themes.dark;
  }),
});
