import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Contact from "../components/Contact";
import home from "../images/home.png";

const theme = {
  blue: {
    default: "#0090ff",
    hover: "#71c2ff",
  },
};

const Button = styled.button`
  width: 30vw;
  height: 7vh;
  font-size: 1.5rem;
  background-color: ${(props) => theme[props.theme].default};
  color: #fffffa;
  padding: 5px 15px;
  border-radius: 20px;
  border: none;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px #d3d3d3;
  transition: ease background-color 250ms;
  transform: scale(1);
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 #e879df;
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
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  ${mediaQueries("sm")`
    width: 40vw;
    height: 10vh;
    font-size: 1rem;
    
  `};
`;

Button.defaultProps = {
  theme: "blue",
};

const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries("sm")`
    margin-top: 10px;
    display: grid;
  
    
  `};
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 3rem;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
  ${mediaQueries("sm")`
    display: column;
     width: 100%;
  `};
`;

const ProcessContainer = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  ul,
  li,
  span {
    font-size: 1.3rem;
    font-family: "SpaceMonoRegular";
    color: var(--main-font-color);
    line-height: 1.5em;
    padding-bottom: 1em;
    ${mediaQueries("sm")`
    font-size: 0.9rem;`};
  }
  span {
    margin-top: 3rem;
    text-align: center;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SpaceMonoRegular";
  color: var(--main-font-color);
  ${mediaQueries("sm")`
    margin:0;
    padding: 1em`};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "NimbusRegular";
  color: var(--secondary-font-color);
  margin: 2rem;
  padding: 4rem;

  background-color: rgba(240, 255, 31, 0.295);
  ${mediaQueries("sm")`
      padding: 0.5rem;
      `};
  p {
    text-align: center;
  }
  & ul,
  li,
  p {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-font-color);
    font-size: 1rem;
  }
  ul,
  li {
    line-height: 1.5em;
    padding-bottom: 1em;
  }
  h1 {
    text-align: center;
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 3rem;
    ${mediaQueries("sm")`
      font-size: 2rem;
      `};
  }
  h2 {
    margin: 0;
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  img {
    margin: 1.5rem 0;
    width: 70%;
    height: 100%;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 20%);
    transform-origin: 50% 65%;
    transition: transform 1s, 1s ease-in-out;

    :hover {
      transform: scale(1.3);
    }
    ${mediaQueries("sm")`
    width: 100%;
    height: 100%;
      `};
  }
  a {
    color: var(--main-font-color);
    text-decoration: none;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.p`
  margin: 10% 0 0 10%;
  width: 100%;
  height: auto;
  line-height: 0.7;
  font-family: "NimbusRegular";
  font-size: 17vw;
  color: var(--primary-color);
  -webkit-text-stroke-width: 0.3vw;
  -webkit-text-stroke-color: var(--secondary-font-color);
  font-size: 11vw;
  text-transform: uppercase;
  font-style: italic;
  text-decoration: underline #f0ff1f;
  ${mediaQueries("sm")`
    margin-right: 20px; 
    letter-spacing: 5px;
      font-size: 3rem;
      color: var(--secondary-font-color)
      `};
`;

const H2 = styled.h2`
  font-family: "NimbusRegular";
  color: var(--secondary-font-color);
  font-size: 1.5vw;
  letter-spacing: 1.5px;
  margin-left: 10%;
  text-transform: uppercase;
  ${mediaQueries("sm")`
     font-size: 1rem;
      `};
`;

const P = styled.p`
  font-size: 1.5rem;
  color: var(--main-font-color);
  margin-left: 40px;
  :first-line {
    line-height: 100%;
  }
  :first-letter {
    font-size: 260%;
    font-weight: bold;
    margin-right: 0.1em;
    float: left;
    line-height: 0.9em;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
  }
  ${mediaQueries("sm")`
      font-size: 1rem;
      padding: 0.4rem;
      `};
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 250, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 4rem 4rem 4rem 14rem;
  z-index: 0;

  ${mediaQueries("sm")`
    padding: 1rem;
    `};
`;

const PNG = styled.div`
  left: 1rem;
  bottom: 7rem;
  position: absolute;
  z-index: -5;
  /* img {
      ${mediaQueries("sm")`
      height: 50%;
      width: 100%;
      `};
    } */
`;

const KeyTakeAway = styled.div`
  width: 80%;
  height: auto;
  padding: 0 4rem;
  ${mediaQueries("sm")`
      padding: 0 0.5rem;
      `};
`;

const PersonaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2em;
  padding: 4rem;
  text-align: center;
  ${mediaQueries("sm")`
      padding: 0.5rem;
      `};
  & ul,
  li,
  p {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-font-color);
    font-size: 1rem;
  }
  p {
    line-height: 1.5em;
  }
  ul,
  li {
    line-height: 40px;
  }
  h1 {
    text-align: center;
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 3rem;
    ${mediaQueries("sm")`
      font-size: 2rem;
      `};
  }
  h2 {
    margin: 0;
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
  }
  a {
    color: var(--main-font-color);
    text-decoration: none;
  }
  img {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 20%);
    ${mediaQueries("sm")`
      :active {
        width: 100vw;
        height: 100%;
      }
      `};
  }
`;

const DetailReversed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2em;
  padding: 4rem;

  ${mediaQueries("sm")`
      padding: 0.5rem;
      `};
  & ul,
  li,
  p {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-font-color);
    font-size: 1rem;
  }
  p {
    text-align: center;
    line-height: 1.5em;
  }
  ul,
  li {
    line-height: 40px;
  }
  h1 {
    text-align: center;
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 3rem;
    ${mediaQueries("sm")`
      font-size: 2rem;
      `};
  }
  h2 {
    margin: 0;
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
  }
  a {
    color: var(--main-font-color);
    text-decoration: none;
  }
`;

const Comparison = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2em;
  padding: 4rem;

  ${mediaQueries("sm")`
      padding: 1rem;
      `};
  & ul,
  li,
  p {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-font-color);
    font-size: 1rem;
  }
  p {
    text-align: center;
    line-height: 1.5em;
  }
  ul,
  li {
    line-height: 40px;
  }
  h1 {
    text-align: center;
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 3rem;
    ${mediaQueries("sm")`
      font-size: 2rem;
      `};
  }
  h2 {
    margin: 0;
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  a {
    color: var(--main-font-color);
    text-decoration: none;
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 20%);
    ${mediaQueries("sm")`
      :active {
        width: 300px;
        height: 100%;
      }
      `};
  }
`;

const CircleContainer = styled.div`
  margin: 1rem 0 1rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  ${mediaQueries("sm")`
      flex-direction: column;
      `};
`;

const Circle = styled.div`
  height: 9.5rem;
  width: 9.5rem;
  background-color: #6fc2a7;
  border-radius: 50%;
  box-shadow: 13px 17px 10px -6px rgba(225, 223, 223, 0.63);
  div {
    height: 9.5rem;
    width: 9.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1em;
    ${mediaQueries("sm")`
      height: 9rem;
      width: 9rem;
      font-size: 1em;
      `};
  }
  ${mediaQueries("sm")`
      height: 9rem;
      width: 9rem;
      `};
  :hover {
    animation: heartbeat 1.5s ease-in-out infinite both;
    @-webkit-keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeat {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
`;

const FlipCardContainer = styled.div`
  background-color: transparent;
  margin-bottom: 3rem;
  height: 950px;
  width: 450px;
  display: grid;
  grid-template-rows: auto auto 3fr;
  justify-items: center;
  ${mediaQueries("sm")`
    padding: 1rem;
      :active {
        width: 300px;
        height: 100%;
      }
      `};
  p {
    text-align: center;
    ${mediaQueries("sm")`
    padding: 1rem;
      `};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2em;
  padding: 1rem;

  ${mediaQueries("sm")`
      margin: 0;
    padding: 2rem;
      `};
  p {
    margin: 0;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const FlipCardImage = styled.img`
  height: 8rem;
  width: 100%;
  object-fit: cover;
  justify-self: center;
  align-self: center;
`;

const MockUp = styled.img`
  width: 20vw;
  height: auto;
  shape-outside: url(${local});
  shape-margin: 1em;
  margin: 1em;
  float: left;
  ${mediaQueries("sm")`
    width: auto;
    height: 70vh;
    margin: 0.5em;
      float: top;
      `};
`;

const Project3 = () => {
  return (
    <ScreenClassProvider>
      <ParallaxProvider>
        <GlobalStyle />
        <main>
          <Container fluid>
            <Row sm={2} md={6}>
              <Col>
                <ImgContainer>
                  <img src={local2} alt="phone app left" />
                  <img src={local3} alt="phone app right" />
                </ImgContainer>
              </Col>
              <Col sm={6}>
                <IssueContainer>
                  <Headline>
                    <H1>100 days of UI</H1>
                    <br />
                    <H2>Always up for a challenge</H2>
                  </Headline>
                  <P>
                    The other day I was searching for some inspiration for a new
                    project and then stumbled over the{" "}
                    <a href="https://www.dailyui.co/">
                      <em>100 days of UI challenge</em>
                    </a>
                    . And what should I say, I do love me some good challenges
                    😉. I upload now daily one challenge with a small info to my
                    thought process.
                  </P>
                  <a
                    href="https://dribbble.com/Matt_RdF"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button> Follow me on dribbble </Button>
                  </a>
                </IssueContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <Details></Details>
              </Col>
            </Row>
          </Container>
          <section id="contact">
            <Contact />
            <Fab
              mainButtonStyles={{ backgroundColor: "#e879de" }}
              style={{ bottom: 10, right: 5 }}
              icon={
                <Link to="/">
                  <img src={home} alt="home" />
                </Link>
              }
            ></Fab>
          </section>
        </main>
      </ParallaxProvider>
    </ScreenClassProvider>
  );
};

export default Project3;
