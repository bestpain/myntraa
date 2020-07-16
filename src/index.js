import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//If you are using react, wrap your root component with PersistGate. 
//This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. 
//persist gate will fire actions to recive the store saved in local storage
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//after login when user visits "/signin" then it shows signin component for a sec which could be avoided by using react suspense.

//2.when loading '/shop' renders two times bcz app.js state chnages
