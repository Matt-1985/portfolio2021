import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { mediaQueries } from "../commons/MediaQueries";

const Ul = styled.ul`
  margin-top: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: var(--main-font-color);
    font-weight: bold;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
    text-decoration: none;
    position: relative;
  }
  /* li:after {
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
    li:hover::after {
      width: 0;
    }
    @media (max-width: 689px) {
      padding-top: 3.5rem;
    } */

  @media (max-width: 689px) {
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
    border-radius: 10px;
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
    padding-top: 3.5rem;
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: bold;
    flex-flow: column nowrap;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
    transition: transform 0.3s ease-in-out;
    z-index: 998;
  }
`;

function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <Link to="#">Home</Link>
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
}

export default RightNav;

RightNav.propTypes = {
  open: PropTypes.any.isRequired,
};
