import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthGaurd from "./store/AuthGaurd/AuthContext";
import reducer, { initialState } from "./store/reducers";
import Header from "./components/header/Header";
import { Grid } from "@mui/material";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthGaurd initialState={initialState} reducers={reducer}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
        <Grid item xs={12}>
          <App />
        </Grid>
      </Grid>
    </AuthGaurd>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
