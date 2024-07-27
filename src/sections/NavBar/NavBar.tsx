import { NavLink, useLocation } from "react-router-dom";
import { StyledNavbarWrapper } from "./NavBar.style";
import { useEffect, useState } from "react";

export function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <StyledNavbarWrapper>Navbar</StyledNavbarWrapper>
      <ul>
        <li>
          <NavLink
            to="/"
            className={activeLink === ("/" || "/main") ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={activeLink === "/search" ? "active" : ""}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={activeLink === "/login" ? "active" : ""}
          >
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={activeLink === "/signup" ? "active" : ""}
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </>
  );
}
