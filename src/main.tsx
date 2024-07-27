import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Hero } from "./sections/Hero/Hero";
import { Footer } from "./sections/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LogIn } from "./view/LogIn/LogIn";
import { SignUp } from "./view/SignUp/SignUp";
import { NavBar } from "./sections/NavBar/NavBar";
import { Search } from "./view/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
          </>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
