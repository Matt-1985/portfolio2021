import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../commons/useOnClickOutside.js";
import styled from "styled-components";
import { RightNav } from "../components/RightNav";
import { mediaQueries } from "../commons/MediaQueries";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 999;
  display: none;

  ${mediaQueries("sm")`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  `};

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--secondary-font-color)" : "var(--main-font-color)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  const handleClickBtn = () => {
    setOpen(true);
  };

  return (
    <>
      <StyledBurger open={open} onClick={handleClickBtn}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
      {open && <div ref={ref} />}
    </>
  );
};
