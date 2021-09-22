import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/core/Home";
import Register from "./components/Register"
import Login from "./components/Login";
import { PrivateRoute } from './components/privateroute';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({forceRefresh:true});

const Routes = () => {
  return (
    <Router forceRefresh={true} history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="*" to="/" />
        </Switch>
    </Router>
  );
};

export default Routes;
