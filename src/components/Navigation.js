import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NavWrapper = styled.nav`
  grid-area: navigation;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 1.5em;
  color: var(--main-font-color);
  font-weight: bold;
  text-decoration: none;
  margin: 15px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    right: 0;
    height: 15%;
    background: var(--main-font-color);
    transition: width 0.25s ease;
  }
  :hover::after {
    width: 0;
  }
`;

export const Nav = () => {
  return (
    <>
      <NavWrapper>
        <NavLink to="#">Home</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#vita">Vita</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </NavWrapper>
    </>
  );
};
