import React, { useState } from "react";
import { useDate } from "../commons/useDate";
import styled from "styled-components";
import Rectangle from "./Rectangle";
import Name from "./Name";
import HeadGif from "./Memoji";

const AnimationContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 35% 1fr;
`;

const IntroductionContainer = styled.div`
  position: relative;
  grid-area: 2 / 3 / 1 / 2;
  justify-self: end;
  margin: 3em 4em 0 0;
  min-height: 50%;
  padding: 3rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
  width: fit-content;
  block-size: fit-content;
`;

const Introduction = styled.p`
  display: inline-block;
  text-transform: uppercase;
  color: var(--main-font-color);
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.4);
`;

export default function Landing() {
  const [showIntro, setShowIntro] = useState(false);
  const { wish } = useDate();

  return (
    <AnimationContainer>
      <Rectangle
        onMouseEnter={() => setShowIntro(true)}
        onMouseLeave={() => setShowIntro(false)}
      />
      <Name />
      <HeadGif />
      {showIntro && (
        <IntroductionContainer>
          <Introduction>
            {wish}
            <br />i am Matthias, a Cologne based Webdeveloper & Designer. From
            the first concept to the production, i create clean & user-friendly
            solutions. Always in mind to keep my code maintainable & reusable.
          </Introduction>
        </IntroductionContainer>
      )}
    </AnimationContainer>
  );
}
