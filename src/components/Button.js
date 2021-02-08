import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 30vh;
  width: 15vw;
  margin-left: 10vw;
  border: none;
  border-radius: 100px;
  background: #0090ff;
  box-shadow: 20px 20px 40px #0079d6, -20px -20px 40px #00a7ff;
  :active {
    box-shadow: -20px -20px 40px #0079d6, 20px 20px 40px #00a7ff;
  }
`;

export default function ProjectButton(onClick) {
  return (
    <>
      <Button onClick={onClick}>CLICK ME!</Button>
    </>
  );
}
