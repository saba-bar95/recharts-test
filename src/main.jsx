import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Charts from "./Charts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Charts />
  </StrictMode>
);
