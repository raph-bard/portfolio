import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Curiculum from "./components/Curiculum";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Curiculum />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/curiculum",
        element: <Curiculum />,
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);