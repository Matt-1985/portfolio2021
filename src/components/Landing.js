import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import { Modal } from "../components/Modal";
import Rectangle from "./Rectangle";
import Name from "./Name";
import HeadGif from "./Memoji";

const Button = styled.button`
  grid-area: 2 / 3 / 1 / 2;
  justify-self: end;
  align-self: end;
  height: 20vh;
  width: 15vw;
  margin-left: 10vw;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 10%;
  border: none;
  color: RGBA(0, 144, 255, 0.62);
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  :focus {
    outline: 0px;
  }

  ${mediaQueries("sm")`
  height: 10vh;
  width: 10vw;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;
  grid-area: 2 / 1 / 2 / 2;
  justify-self: center;
  align-self: center;
  
  `};
  z-index: 900;
`;

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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <LandingContainer>
        <AnimationContainer>
          <Button onClick={openModal}>Push me</Button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <Rectangle />
          <Name />
          <HeadGif />
        </AnimationContainer>
      </LandingContainer>
    </>
  );
}
