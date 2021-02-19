import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  left: -76px;
  top: 28px;
  height: 30vh;
  width: 15vw;
  margin-left: 10vw;
  border: none;
  border-radius: 100px;
  border-radius: 20px;
  background: linear-gradient(145deg, #ffffff, #e6e6e1);
  box-shadow: 10px 10px 20px #d9d9d5, -10px -10px 20px #ffffff;
  :active {
    border-radius: 20px;
    background: linear-gradient(145deg, #e6e6e1, #ffffff);
    box-shadow: 10px 10px 20px #d9d9d5, -10px -10px 20px #ffffff;
  }
`;

export default function ProjectButton(onClick) {
  return (
    <>
      <Button onClick={onClick}>CLICK ME!</Button>
    </>
  );
}
