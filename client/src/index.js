import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import rootReducer from "../src/reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const enhancers = compose(
  applyMiddleware(thunkMiddleware),
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, {}, enhancers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
