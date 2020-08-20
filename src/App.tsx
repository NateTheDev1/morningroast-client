import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </>
  );
};

export default App;
