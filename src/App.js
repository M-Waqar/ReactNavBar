import React from "react";
import MasterPage from "./components/MasterPage";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MasterPage>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </MasterPage>
    </Router>
  );
}

export default App;
