import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Topics } from './pages/Topics';
import { ThemeContext, themes } from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  function toggleTheme(){
    setTheme(theme === themes.dark
          ? themes.light
          : themes.dark
    );
  };
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>Muda Tema</button>
        <About />
        <hr />

        <ThemeContext.Provider value={theme}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}