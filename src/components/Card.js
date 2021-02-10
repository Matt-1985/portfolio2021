import React from "react";
import styled from "styled-components";
import cardImage from "../images/choicely.png";

const ScrollBoxContainer = styled.div`
  height: 100%;
  display: inline-flex;
`;

const CardsContainer = styled.div`
  display: grid;
  overflow: hidden;
  width: 20em;
  height: 30em;
  margin: 0 auto;
  position: relative;
  /* grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
  align-items: start;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  z-index: 4;
`;

const CardImage = styled.img`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContentContainer = styled.div`
  padding: 0.5rem 0.5rem;
`;
const CardHeadline = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const CardParagraph = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const CardButton = styled.a`
  display: block;
  width: 50%;
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  color: transparent;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0.4rem;
`;

export default function Cards(onClick) {
  return (
    <>
      <ScrollBoxContainer>
        <CardsContainer>
          <CardContentContainer>
            <CardImage src={cardImage} alt="choicely App" />
            <CardHeadline>choicely - The App for the Undecided</CardHeadline>
            <CardParagraph>My first Web App!</CardParagraph>
            <CardButton onClick={onClick}>To the project</CardButton>
          </CardContentContainer>
        </CardsContainer>
      </ScrollBoxContainer>
    </>
  );
}
