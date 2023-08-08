import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotesProvider } from "./context/NotesContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import New from "./components/New.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element: <New />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <NotesProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </NotesProvider>
  // </React.StrictMode>
);
