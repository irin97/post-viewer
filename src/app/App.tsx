import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainLayout } from "../shared/layouts/MainLayout";
import "./App.css"
import { Provider } from 'react-redux';
import { store } from "./providers/store";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </StrictMode>,
)