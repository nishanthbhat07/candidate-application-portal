import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/lexend/300.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/700.css";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";

const THEME = createTheme({
  typography: {
    fontFamily: `"Lexend", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
