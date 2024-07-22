import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { NavBar } from "./sections/NavBar/NavBar";
import { Hero } from "./sections/Hero/Hero";
import { Footer } from "./sections/Footer/Footer";

const search = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";

console.log(search);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <SearchBar />
    <Footer />
  </React.StrictMode>
);
