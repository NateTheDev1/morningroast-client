import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ConfirmedOrder from "./components/ConfirmedOrder";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/orderconfirmed" component={ConfirmedOrder} />
      </Switch>
    </>
  );
};

export default App;
