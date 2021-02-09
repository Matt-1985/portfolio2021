import React, { useState } from "react";
import { useDate } from "../commons/useDate";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const ContactContainer = styled.div`
  letter-spacing: 1px;
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* padding: 6rem; */
  z-index: 3;
  /* transform: skewY(-11deg); */
  clip-path: polygon(0 58%, 100% 29%, 100% 100%, 0% 100%);
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    43deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
`;

const HeadlineContainer = styled.div`
  /* max-width: 50em;
  margin: 0 auto;
  position: relative; */
  transform: skewY(-8deg);
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  line-height: 0.9;
  /* letter-spacing: 1px; */
`;

const Headline = styled.span`
  font-size: 3vw;
  position: relative;
  top: 0;
  bottom: 2;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  z-index: 5;
  text-shadow: 4px 5px 0px rgba(240, 255, 31, 0.39);
`;

const Headline2 = styled.span`
  font-size: 3vw;
  position: relative;
  top: 0;
  bottom: 2;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  z-index: 5;
  text-shadow: 4px 5px 0px rgba(240, 255, 31, 0.39);
  /* transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 116.2, 0, 0, 1); */
`;

const Headline3 = styled.span`
  font-size: 3vw;
  position: relative;
  top: 0;
  bottom: 2;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  z-index: 5;
  text-shadow: 4px 5px 0px rgba(240, 255, 31, 0.39);
`;

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <HeadlineContainer>
          <Parallax x={[-100, 50]} tagInner="div">
            <Headline>get in touch get in</Headline>
          </Parallax>
          <Parallax x={[100, -50]} tagInner="div">
            <Headline2> get in touch</Headline2>
            <Headline3> get in touch</Headline3>
          </Parallax>
        </HeadlineContainer>
      </ContactContainer>
    </>
  );
}
