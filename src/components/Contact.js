import React, { useState } from "react";
import { useDate, date, time } from "../commons/useDate";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Footer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  /* transform: skewY(-10deg); */
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    45deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
`;

const StyledText = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.sroll {
    display: flex;
    width: 100%;
    box-shadow: 0 8px 16px rgba(#000000, 0.5);
  }
  &.div {
    font-weight: 900;
    font-size: 4em;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--primary-color);
    background-color: transparent;
    animation: animate 50s -50s linear infinite;
    will-change: transform;
    :nth-child(2) {
      animation: animate2 70s -60s linear infinite;
    }
    @keyframes animate {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes animate2 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-200%);
      }
    }
  }
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 2em;
  text-transform: uppercase;
  /* white-space: nowrap; */
  -webkit-text-stroke: 1px transparent;
  color: var(--primary-color);
  line-height: 0.5;
`;

const A = styled.a`
  font-family: "NimbusRegular";
`;

const Date = styled.span`
  border: 1px solid black;
  margin: 0;
  font-size: 2em;
  font-weight: normal;
  color: black;
  z-index: 2;
`;

const StyledHeadline = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.dashed-shadow {
    margin: 0;
    text-align: center;
    font-size: 14vw;
    letter-spacing: 4vw;
    position: relative;
    top: 8px;
    left: 8px;
    display: inline-block;
    color: var(--primary-color);
  }
  :before {
    content: " ";
    display: block;
    position: absolute;
    top: -8px;
    left: -8px;
    bottom: -2px;
    right: -2px;
    z-index: -1;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIxMi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iMTIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIzNy41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjM3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PHN0b3Agb2Zmc2V0PSI2Mi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iNjIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI4Ny41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9Ijg3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
    background-size: 100%;
    background-image: -moz-linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-image: -webkit-linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-image: linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-size: 6px 6px;
  }
  :after {
    z-index: -2;
    content: attr(data-text);
    position: absolute;
    left: -8px;
    top: -8px;
    color: #b587e6;
    text-shadow: 3px 3px #ffffff;
  }
`;

export default function Contact() {
  const { date, time } = useDate();

  return (
    <>
      <Parallax y={[75, 5]} tagInner="figure">
        <StyledHeadline className="dashed-shadow" data-text="Contact">
          Contact
        </StyledHeadline>
      </Parallax>
      <Footer>
        <StyledText className="scroll div">
          <Span>
            <A href="https://www.linkedin.com/in/matthias-rodrigues-de-frança">
              linkedin -
            </A>
          </Span>
          <Span>
            <A href="mailto:matthias.rodriguesdefranca@gmail.com">email - </A>
          </Span>
          <Span>
            <A href="https://github.com/Matt-1985">github - </A>
          </Span>
          <Span>
            <A href="https://www.instagram.com/der_sonderman/">instagram -</A>
          </Span>
        </StyledText>
        <Date>
          {date}
          <br />
          {time}
        </Date>
      </Footer>
    </>
  );
}
