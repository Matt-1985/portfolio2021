import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  :hover {
    text-decoration: line-through;
  }
`;

export const Nav = () => {
  return (
    <>
      <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/vita">Vita</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavWrapper>
    </>
  );
};
