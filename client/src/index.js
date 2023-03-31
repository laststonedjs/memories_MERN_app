import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// reducers
import reducers from "./reducers";

import App from "./App";
// styles
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));