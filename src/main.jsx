
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./components/pages/Register.jsx";
import Login from "./components/pages/Login.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import HomePage from "./components/pages/HomePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound/>
  },
  {
    path: '/HomePage',
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
