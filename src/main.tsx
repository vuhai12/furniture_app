import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../src/context/AppContext.tsx";
import ScrollButton from "@components/ScrollButton/index.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ScrollButton />
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
