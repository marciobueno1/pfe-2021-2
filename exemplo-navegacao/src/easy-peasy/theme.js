import { action } from "easy-peasy";

import { themes, isSameTheme } from "../themes";

export const theme = {
  mode: themes.dark,
  toggle: action((state) => {
    state.mode = isSameTheme(state.mode, themes.dark)
      ? themes.light
      : themes.dark;
  }),
};
