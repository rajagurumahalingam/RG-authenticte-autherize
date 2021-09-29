import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/core/Home";
import Register from "./components/Register"
import Login from "./components/Login";
import { PrivateRoute } from './components/privateroute';
import { createBrowserHistory, withRouter } from 'history';

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect from="*" to="/" />
        </Switch>
    </Router>
  );
};

export default Routes;
