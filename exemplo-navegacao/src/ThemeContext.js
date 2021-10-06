import React from "react";

import { themes } from "./themes";

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
