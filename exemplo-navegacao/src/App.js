import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { HomeCopy } from "./pages/HomeCopy";
import { Topics } from "./pages/Topics";
// import { themes } from "./themes";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/copy">Home Copy</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/copy">
            <HomeCopy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
