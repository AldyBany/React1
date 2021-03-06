import About from "./About";
import "./styles.css";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

export default function App() {
  return (
    <Router>
      <div class="container">
        <Navbar />
        <div class="content m-4">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
