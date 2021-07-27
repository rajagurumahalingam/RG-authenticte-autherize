import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import { store } from './../src/_helpers/store';


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById("root")
);
