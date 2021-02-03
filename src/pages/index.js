import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import { Nav } from "../components/Navigation";
import meGif from "../images/Me1.gif";

const ParallaxContainer = styled.div`
  grid-area: "landing";
  max-width: 600px;
  margin: auto;
  width: 90%;
  padding: 200px 0px;
  position: relative;
`;

const Img = styled.img`
  background: transparent;
  position: relative;
  bottom: 55%;
  left: 30%;
  z-index: 2;
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
`;

const P = styled.p`
  font-size: 3em;
  position: absolute;
  bottom: 37%;
  left: -50%;
  z-index: 1;
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
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Nav />
        <ParallaxContainer>
          <Rectangle />
          <Name />
          <P>Portfolio</P>
          <Img src={meGif} alt="Matt spinning his head" />
        </ParallaxContainer>
      </main>
    </>
  );
};

export default IndexPage;
