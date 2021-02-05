import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    &.navbar.active {
      background: rgba(240, 255, 31, 0.5);
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 1.5vw;
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

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <StyledNavWrapper
        key={navbar}
        className={navbar ? "navbar active" : "navbar"}
      >
        <NavLink to="#">Home</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#vita">Vita</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </StyledNavWrapper>
    </>
  );
}

export default Nav;

Nav.propTypes = {
  className: PropTypes.string.isRequired,
};
