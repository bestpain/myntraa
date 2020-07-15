import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


//after login when user visits "/signin" then it shows signin component for a sec which could be avoided by using react suspense. 

//2.when loading '/shop' renders two times bcz app.js state chnages