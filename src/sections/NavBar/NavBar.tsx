import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { StyledNavbarWrapper } from "./NavBar.style";

export function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <StyledNavbarWrapper>
        <ul>
          <li>
            <NavLink
              to="/"
              className={activeLink === ("/" || "/main") ? "active" : ""}
            >
              <AiOutlineHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={activeLink === "/search" ? "active" : ""}
            >
              <AiOutlineSearch />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={activeLink === "/login" ? "active" : ""}
            >
              <AiOutlineUser />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={activeLink === "/signup" ? "active" : ""}
            >
              <AiOutlineUserAdd />
            </NavLink>
          </li>
        </ul>
      </StyledNavbarWrapper>
    </>
  );
}
