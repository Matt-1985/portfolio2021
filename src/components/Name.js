import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";

const Container = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${mediaQueries("xs")`
  margin-bottom: 5vw;
  
  
  `};
`;

const FullName = styled.p`
  margin: 10% 0 0 10%;
  width: 100%;
  height: auto;
  line-height: 0.7;
  font-family: "NimbusRegular";
  font-size: 17vw;
  color: var(--primary-color);
  -webkit-text-stroke-width: 0.3vw;
  -webkit-text-stroke-color: var(--secondary-font-color);
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
  ${mediaQueries("sm")`
  line-height: 0.7;
  font-size: 8rem;
  padding-right: 2rem;
  -webkit-text-stroke-width: 0.5vw;
  
  
  `};
`;

const P = styled.p`
  color: var(--main-font-color);
  margin: 0 0 0 10%;
  font-size: 4vw;
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
  animation: text-focus-in 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
  ${mediaQueries("sm")`
  
  font-size: 3rem;
  
  `};
`;

export default function Name() {
  return (
    <Container>
      <FullName>Matthias Rodrigues de França</FullName>
      <P>Portfolio</P>
    </Container>
  );
}
