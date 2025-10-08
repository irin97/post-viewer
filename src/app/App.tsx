import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"
import { Provider } from 'react-redux';
import { store } from "./providers/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/router";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)