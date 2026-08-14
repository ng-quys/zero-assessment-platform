import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import keycloak from "./auth/keycloak";

keycloak
  .init({
    onLoad: "login-required",
    pkceMethod: "S256",
  })
  .then((authenticated) => {
    if (authenticated) {
      createRoot(document.getElementById("root")!).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  })
  .catch((error) => {
    console.error("Keycloak initialization failed:", error);
  });