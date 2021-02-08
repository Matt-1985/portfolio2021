import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const VitaContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  transform: skewY(10deg);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
  width: 100%;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    125deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
`;

const Headline = styled.span`
  position: relative;
  top: 0;
  bottom: 2;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  text-shadow: 4px 5px 0px rgba(232, 121, 222, 0.88);
`;

const Vita = () => {
  return (
    <>
      <Parallax y={[-40, 50]} x={[60, 50]} tagInner="figure">
        <Headline>Vita</Headline>
      </Parallax>
      <VitaContainer></VitaContainer>
    </>
  );
};

export default Vita;
