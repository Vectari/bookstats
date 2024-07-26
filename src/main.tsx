import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { SearchBar } from "./components/SearchBar/SearchBar";
// import { NavBar } from "./sections/NavBar/NavBar";
// import { Hero } from "./sections/Hero/Hero";
// import { Footer } from "./sections/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LogIn } from "./view/LogIn/LogIn";
import { SignUp } from "./view/SignUp/SignUp";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { NavBar } from "./sections/NavBar/NavBar";

// const search = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";

// console.log(search);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* <NavBar />
//     <Hero />
//     <SearchBar />
//     <Footer /> */}

//     {/* <NavBar />
//     <Outlet /> */}
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <SearchBar />
          </>
        ),
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
