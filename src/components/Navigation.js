import React from "react";
import styled from "styled-components";
import Burger from "../components/Burger";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;

  background: -webkit-repeating-linear-gradient(
    30deg,
    rgba(240, 255, 31, 0),
    rgba(240, 255, 31, 0) 3px,
    rgba(232, 121, 222, 0.3) 3px,
    rgba(232, 121, 222, 0.3) 9px
  );
  background: repeating-linear-gradient(
    30deg,
    rgba(240, 255, 31, 0),
    rgba(240, 255, 31, 0) 3px,
    rgba(232, 121, 222, 0.3) 3px,
    rgba(232, 121, 222, 0.3) 9px
  );
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
