import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
