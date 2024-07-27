import styled from "styled-components";
import { Theme } from "../../Theme";

export const StyledNavbarWrapper = styled.div`
  background-color: ${Theme.colors.dark_grey};
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  position: fixed;
  bottom: 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  li {
    display: inline;
  }

  a {
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    text-decoration: none;
    color: ${Theme.colors.white};
    font-size: 1.3rem;
  }

  .active {
    background-color: ${Theme.colors.active};
  }

  @media screen and (max-width: 440px) {
    a {
      padding: 0.5rem 1.7rem;
    }

    .active {
      background-color: pink;
    }
  }
`;
