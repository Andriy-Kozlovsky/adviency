import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";

import store from "./store";
import {theme} from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
