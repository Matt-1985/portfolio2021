import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import PropTypes from "prop-types";

const Ul = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  @media (max-width: 689px) {
    padding: 60px 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
    justify-content: center;
    flex-flow: column nowrap;
    transition: transform 0.3s ease-in-out;
    z-index: 998;
  }

  li {
    padding: 15px 10px;
    position: relative;
  }
  a {
    color: var(--main-font-color);
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);

    ${mediaQueries("sm")`
    font-size: 4.5vh;
    color: var(--primary-color);
    
  `};
  }
`;

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="#">Home</Link>
      </li>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#projects">Projects</Link>
      </li>
      <li>
        <Link to="#vita">Vita</Link>
      </li>
      <li>
        <Link to="#contact">Contact</Link>
      </li>
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.any.isRequired,
};
