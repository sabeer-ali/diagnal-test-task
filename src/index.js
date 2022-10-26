import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const RootStore = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={RootStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
