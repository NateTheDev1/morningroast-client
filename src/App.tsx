import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ConfirmedOrder from "./components/ConfirmedOrder";
import Onboarding from "./components/Onboarding";
import Account from "./components/Account";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/orderconfirmed" component={ConfirmedOrder} />
        <Route exact path="/signup">
          <Onboarding onboardingType="signup" />
        </Route>
        <Route exact path="/login">
          <Onboarding onboardingType="login" />
        </Route>
        <Route exact path="/account" component={Account} />
      </Switch>
    </>
  );
};

export default App;
