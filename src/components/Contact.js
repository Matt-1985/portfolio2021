import React, { useState } from "react";
import { useDate } from "../commons/useDate";
import styled from "styled-components";

const StyledContactContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.m-scroll {
    display: flex;
    position: relative;
    height: 70vh;
    width: 100%;
    margin: auto;
    overflow: hidden;
    z-index: 1;
    clip-path: polygon(0 58%, 100% 29%, 100% 100%, 0% 100%);
    border-radius: 12px;
    background: rgb(232, 121, 222);
    background: linear-gradient(
      43deg,
      rgba(232, 121, 222, 0.9023984593837535) 0%,
      rgba(0, 144, 255, 1) 59%,
      rgba(240, 255, 31, 0.8603816526610644) 95%
    );
  }
`;

const StyledHeadlineContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.title {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transform: skewY(-8deg);
    transition: all 1s ease;
  }
`;

const StyledDiv = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.div {
    display: flex;
    animation: scrollText 33s infinite linear;
    @keyframes scrollText {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-50%);
      }
    }
  }
`;

const StyledH1 = styled.h1.attrs((props) => ({
  className: props.className,
}))`
  h1 {
    margin: 0;
    font-size: 140px;
    color: rgba(255, 255, 255, 1);
    transition: all 2s ease;
  }
`;

const StyledA = styled.a.attrs((props) => ({
  className: props.className,
}))`
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    -webkit-text-stroke: 1px white;
    color: transparent;
  }
`;

export default function Contact() {
  return (
    <>
      <StyledContactContainer className="m-scroll">
        <StyledHeadlineContainer className="title">
          <StyledDiv className="div">
            <StyledH1 className="h1">
              <StyledA className="a" href="https://dribbble.com/JulianoF">
                get in touch get in
              </StyledA>
            </StyledH1>
            <StyledH1 className="">
              <StyledA className="" href="https://dribbble.com/JulianoF">
                get in touch get in
              </StyledA>
            </StyledH1>
          </StyledDiv>
        </StyledHeadlineContainer>
      </StyledContactContainer>
    </>
  );
}
