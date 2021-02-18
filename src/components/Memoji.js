import React from "react";
import styled from "styled-components";
import meGif from "../images/Me1.gif";
import { mediaQueries } from "../commons/MediaQueries";

const Img = styled.img`
  grid-area: 2 / 2 / 3 / 3;
  width: 37.5vw;
  height: auto;
  max-width: 100%;
  z-index: 3;
  position: relative;
  left: -55px;
  top: -71px;
  transform: translate (30px, -40px);
  /* margin: 0 0 30% 5%; */
  animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-bottom {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  ${mediaQueries("sm")`
  width: 100vw;
  height: auto;
  left: -52px
  top: -55px;
`}
`;

export default function HeadGif() {
  return (
    <>
      <Img src={meGif} alt="Matt spinning his head" />
    </>
  );
}
