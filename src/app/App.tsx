import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainLayout } from "../shared/layouts/MainLayout";
import "./App.css"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)