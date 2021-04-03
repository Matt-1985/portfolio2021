import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";

const ScrollBoxContainer = styled.div`
  height: 100%;
  display: inline-flex;
`;

const CardsContainer = styled.div`
  box-shadow: -2rem 0 3rem -2rem #000;
  background: linear-gradient(85deg, #434343, #262626);
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 0;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
`;

const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
`;

const CardHeadline = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
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

const CardButton = styled.button`
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  background-color: var(--highlight-color);
  color: var(--primary-color);
  border: none;
  border-radius: 0.4rem;
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
  }
`;

export default function Cards(props) {
  return (
    <>
      <ScrollBoxContainer>
        <CardsContainer>
          <CardContentContainer>
            <CardImage src={props.src} />
            <CardHeadline>{props.headline}</CardHeadline>
            <CardParagraph>{props.p}</CardParagraph>
            <CardButton>{props.href}</CardButton>
          </CardContentContainer>
        </CardsContainer>
      </ScrollBoxContainer>
    </>
  );
}

Cards.propTypes = {
  href: PropTypes.string,
  headline: PropTypes.string,
  p: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
