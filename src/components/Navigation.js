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
      transform: skewY(1.5deg);
      background: rgba(240, 255, 31, 0.5);
      animation: flicker-in-1 2s linear both;
      @keyframes flicker-in-1 {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0;
        }
        10.1% {
          opacity: 1;
        }
        10.2% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        20.1% {
          opacity: 1;
        }
        20.6% {
          opacity: 0;
        }
        30% {
          opacity: 0;
        }
        30.1% {
          opacity: 1;
        }
        30.5% {
          opacity: 1;
        }
        30.6% {
          opacity: 0;
        }
        45% {
          opacity: 0;
        }
        45.1% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        55% {
          opacity: 1;
        }
        55.1% {
          opacity: 0;
        }
        57% {
          opacity: 0;
        }
        57.1% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        60.1% {
          opacity: 0;
        }
        65% {
          opacity: 0;
        }
        65.1% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        75.1% {
          opacity: 0;
        }
        77% {
          opacity: 0;
        }
        77.1% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        85.1% {
          opacity: 0;
        }
        86% {
          opacity: 0;
        }
        86.1% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    }
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
  let pathname =
    typeof window !== "undefined" ? window.location.pathname : "Nav";

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
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
