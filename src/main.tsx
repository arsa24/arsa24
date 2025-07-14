import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// const favicon = document.createElement("link");
// favicon.rel = "icon";
// favicon.type = "image/svg+xml";
// favicon.href = import.meta.env.BASE_URL + "serika.svg";
// document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
