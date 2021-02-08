import React from "react";
import styled from "styled-components";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import HeadGif from "../components/Memoji";

const AnimationContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 35% 1fr;
`;

export default function Animation() {
  return (
    <AnimationContainer>
      <Rectangle />
      <Name />
      <HeadGif />
    </AnimationContainer>
  );
}
