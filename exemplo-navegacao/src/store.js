import { action, createStore } from "easy-peasy";

import { themes, isSameTheme } from "./themes";
import { composeWithDevTools } from "remote-redux-devtools";

export const store = createStore(
  {
    theme: themes.dark,
    toggleTheme: action((state) => {
      state.theme = isSameTheme(state.theme, themes.dark)
        ? themes.light
        : themes.dark;
    }),
  },
  {
    compose: composeWithDevTools({ realtime: true, trace: true }),
  }
);
