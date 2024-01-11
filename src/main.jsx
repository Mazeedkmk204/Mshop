

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import {app} from './firebase.config'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <App />
      </PersistGate >
    </Provider>
  </React.StrictMode>
);

