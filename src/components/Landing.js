import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import Rectangle from "./Rectangle";
import Name from "./Name";
import HeadGif from "./Memoji";

const LandingContainer = styled.div`
  margin: 0;

  ${mediaQueries("sm")`
  
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 4rem;

  
  `};
`;

const AnimationContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 35% 1fr;
  ${mediaQueries("sm")`
  height: 100vh;
  width: 100vw;
  
  
  `};
`;

export default function Landing() {
  return (
    <>
      <LandingContainer>
        <AnimationContainer>
          <Rectangle />
          <Name />
          <HeadGif />
        </AnimationContainer>
      </LandingContainer>
    </>
  );
}
