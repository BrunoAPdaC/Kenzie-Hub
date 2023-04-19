import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Providers/Context";
import { TechProvider } from "./Providers/TechContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
