import React from "react";
import ReactDOM from "react-dom";
import "./styles/bootstrap.css";

import { AuthProviderWrapper } from "./context/auth.context";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </Router>,
  document.getElementById("root")
);
