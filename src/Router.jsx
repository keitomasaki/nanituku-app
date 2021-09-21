import React from "react";
import SignUp from "./pages/SignUp";
import Sub1 from "./pages/Sub1";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Auth from "./Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Auth>
          <Route exact path="/Sub1" component={Sub1} />
          <Route exact path="/" component={Home} />
        </Auth>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
