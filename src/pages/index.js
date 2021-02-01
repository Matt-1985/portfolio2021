import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import { Nav } from "../components/Navigation";
import meGif from "../images/Me1.gif";
import logoMe from "../images/logo_2021.svg";

const ParallaxContainer = styled.div`
  max-width: 600px;
  margin: auto;
  width: 90%;
  padding: 200px 0px;
  position: relative;
`;

const Img = styled.img`
  background: transparent;
  position: relative;
  z-index: 2;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Logo src={logoMe} alt="Logo" />
        <Nav />
        <ParallaxContainer>
          <Rectangle />
          <Name />
          <Img src={meGif} alt="Matt spinning his head" />
          <p>Portfolio</p>
        </ParallaxContainer>
      </main>
    </>
  );
};

export default IndexPage;
