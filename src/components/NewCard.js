import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -2rem 0 3rem -2rem #000;
  background: linear-gradient(85deg, #434343, #262626);
  color: #fff;
  transition: 0.2s;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 0;
  z-index: 4;
  ${mediaQueries("sm")`
    width: 100%;
    height: 100%;
      `};
`;

const CardImage = styled.img`
  border-radius: 10px;
  width: 19rem;
  height: 17rem;
  object-fit: cover;

  transform-origin: 60% 75%;
  transition: transform 1s, 1s ease-in-out;

  :hover {
    transform: scale(1.5);
  }
  ${mediaQueries("sm")`
    width: 100%;
    height: 100%;
      `};
`;

const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 0.5rem 0.5rem;
`;

const CardText = styled.div`
  width: 80%;
  line-height: 1.5em;
  text-align: justify;
  align-self: center;
  justify-self: center;
`;

const CardHeadline = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const CardParagraph = styled.p`
  padding: 1rem;
  text-align: block;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  ${mediaQueries("sm")`
  font-size: 1rem;
  margin-bottom: 3.5rem;`};
`;

const CardButton = styled.div`
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  background-color: var(--highlight-color);
  color: var(--primary-color);
  border: none;
  border-radius: 0.4rem;
  position: absolute;
  bottom: 0;
  transition: ease background-color 250ms;
  transform: scale(1);
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(240, 255, 31, 0.39);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default function NewCard(props) {
  return (
    <>
      <CardsContainer>
        <CardContentContainer>
          <CardImage src={props.src} />
          <CardText>
            <CardHeadline>{props.headline}</CardHeadline>
            <CardParagraph>{props.p}</CardParagraph>
          </CardText>

          <CardButton>{props.href}</CardButton>
        </CardContentContainer>
      </CardsContainer>
    </>
  );
}

NewCard.propTypes = {
  href: PropTypes.object.isRequired,
  headline: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
