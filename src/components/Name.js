import React from "react";
import styled from "styled-components";

const NameCointainer = styled.div`
  /* height: 360px;
  width: 550px;
  /* display: flex; 
  align-content: stretch;
  border: none;
  background: transparent;
  text-align: justify;
  word-break: break-all;
  margin: 0;
	font-size: 64px; */
  width: 100%;
  text-align: justify;
  position: absolute;
  top: 25%;
  left: -50%;
  transform: translateY(-50%);
  z-index: 1;
  word-break: break;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const FullName = styled.span`
  position: relative;
  display: block;
  /* display: inline-block; */
  line-height: 0.7;
  font-family: "NimbusRegular";
  font-size: 180px;
  color: var(--primary-color);
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: var(--secondary-font-color);
`;

export default function Name() {
  return (
    <NameCointainer>
      <FullName>Matthias Rodrigues de França</FullName>
    </NameCointainer>
  );
}
