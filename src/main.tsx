import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { LogIn } from "./view/LogIn/LogIn";
import { SignUp } from "./view/SignUp/SignUp";
import { NavBar } from "./sections/NavBar/NavBar";
import { Search } from "./view/Search/Search";
import { Home } from "./view/Home/Home";
import { BookDetail } from "./view/BookDetail/BookDetail";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/detail/:edition_key" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

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
            <Home />
          </>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/detail/:edition_key",
        element: <BookDetail />,
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
