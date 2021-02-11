import React, { useState, useEffect } from "react";
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
    transform: skewY(1.5deg);
    background: -webkit-repeating-linear-gradient(
      30deg,
      rgba(240, 255, 31, 0),
      rgba(240, 255, 31, 0) 3px,
      rgba(232, 121, 222, 0.16) 3px,
      rgba(232, 121, 222, 0.16) 9px
    );
    background: repeating-linear-gradient(
      30deg,
      rgba(240, 255, 31, 0),
      rgba(240, 255, 31, 0) 3px,
      rgba(232, 121, 222, 0.16) 3px,
      rgba(232, 121, 222, 0.16) 9px
    );
  }

  &.hide {
    transform: translateY(-80px);
  }
  &.nav {
    width: 100%;
    /* max-width: 1400px; */
    margin: 0 auto;
    padding: 0px 1.0875rem;
    font-size: 16px;
    font-weight: 600;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.5vw;
  color: var(--main-font-color);
  font-weight: bold;
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
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
  const [menu, showMenu] = useState(true);

  const toggleMenu = () => {
    let distanceFromTop = window.pageYOffset;

    return function () {
      let newDistanceFromTop = window.pageYOffset;
      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        showMenu(true);
      } else {
        showMenu(false);
      }
      distanceFromTop = newDistanceFromTop;
    };
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleMenu());
    return window.removeEventListener("scroll", toggleMenu());
  }, []);

  return (
    <>
      <StyledNavWrapper className={menu ? "navbar " : "navbar hide"}>
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
