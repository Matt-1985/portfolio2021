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
  /* display: grid;
  overflow: hidden;
  width: 20em;
  height: 30em;
  margin: 0 auto;
  position: relative; */
  /* grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
  /* align-items: start; */
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
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  background-color: transparent;
  color: var(--primary-color);
  border: none;
  border-radius: 0.4rem;
`;

const Div = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
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
            <Div>
              <CardButton>{props.href}</CardButton>
            </Div>
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
