import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logoMe from "../images/logo2.png";

export const NavWrapper = styled.nav`
  grid-area: navigation;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 2em;
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

const Logo = styled.img`
  width: 3em;
  height: 3em;

  margin: 10px 0 0 10px;
`;

export const Nav = () => {
  return (
    <>
      <NavWrapper>
        <Logo src={logoMe} alt="Logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/vita">Vita</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <mask></mask>
      </NavWrapper>
    </>
  );
};
