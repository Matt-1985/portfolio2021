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
  top: 50%;
  left: -30%;
  transform: translateY(-50%);
  z-index: 1;
  word-break: break;
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
      <FullName>Matthias Rodriges de França</FullName>
    </NameCointainer>
  );
}
