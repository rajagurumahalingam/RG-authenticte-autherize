import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/core/Home";
import Register from "./components/Register"
import Login from "./components/Login";
import { PrivateRoute } from './components/privateroute';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({forceRefresh:true});

const Routes = () => {
  return (
    <BrowserRouter forceRefresh={true} history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;
