import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// REDUX
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// ROUTER

import { BrowserRouter as Router } from "react-router-dom";
import indexReducer from "./reducers/indexReducer";

const store = createStore(
  indexReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
