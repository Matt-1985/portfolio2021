import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import { Nav } from "../components/Navigation";

const ParallaxContainer = styled.div`
  max-width: 600px;
  margin: auto;
  width: 90%;
  padding: 200px 0px;
  position: relative;
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
          <p>Portfolio</p>
        </ParallaxContainer>
      </main>
    </>
  );
};

export default IndexPage;
