import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cursor from "./pages/Cursor";
import "./app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <Cursor />
      <App />
    </main>
  </React.StrictMode>
);
