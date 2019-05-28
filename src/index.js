import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import createStore from redux
import { createStore } from "redux";

//reducer function
function reducer(state, action) {
  if (action.type === "changeState") {
    return action.payload.newState;
  }
  return "State";
}

//create store using reducer
const store = createStore(reducer);

console.log(store.getState());

//create action
const action = {
  type: "changeState",
  payload: {
    newState: "New State"
  }
};

//dispatch action
store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
