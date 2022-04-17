import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { BrowserRouter, Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import store from "./redux/config.redux.js";
import { history } from "./libs/history/history.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);
