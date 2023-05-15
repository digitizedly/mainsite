import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Util/Theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
