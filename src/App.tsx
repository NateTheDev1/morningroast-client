import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Switch>
      <Nav />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
