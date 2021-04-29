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
import ui from "../images/ui.png";
import NewCard from "../components/NewCard";
import day1 from "../images/day1a.png";
import day2 from "../images/day2a.png";

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
  justify-content: center;
  align-items: center;
  ${mediaQueries("sm")`
    margin-top: 10px;
    display: grid;
  `};
  a {
    font-weight: bold;
    color: var(--secondary-font-color);
    text-decoration: none;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80%;
    margin: 2rem 0;
  }
  ${mediaQueries("sm")`
    display: column;
    margin: 2rem 0;
    
     
  `};
`;

const TextContainer = styled.div`
  width: 1250px;
  height: auto;
  text-align: justify-all;
  ${mediaQueries("sm")`
    width:auto;
    
    
     
  `};
`;

const Details = styled.div`
  align-items: center;
  justify-content: center;
  font-family: "NimbusRegular";
  color: var(--secondary-font-color);
  background-color: rgba(240, 255, 31, 0.295);
  margin: 2rem;
  padding: 4rem;
  margin: 1rem 0 1rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  ${mediaQueries("sm")`
    flex-direction: column;
    padding: 0.5rem;
    `};

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
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
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
`;

const Headline = styled.div`
  width: 100%;
  height: auto;
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
                  <img src={ui} alt="phone app left" />
                </ImgContainer>

                <IssueContainer>
                  <Headline>
                    <H1>100 days of UI</H1>
                    <br />
                    <H2>Always up for a challenge</H2>
                  </Headline>
                  <TextContainer>
                    <P>
                      The other day I was searching for some inspiration for a
                      new project and then stumbled over the{" "}
                      <a href="https://www.dailyui.co/">
                        <em>100 days of UI challenge</em>
                      </a>
                      . And what should I say, I do love me some good challenges
                      😉. I upload now daily one challenge with a small info to
                      my thought process.
                    </P>
                  </TextContainer>
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
                <Details>
                  <NewCard
                    src={day1}
                    alt="app logo"
                    headline="day 1 - sign up"
                    p="I wanted to create a clean, frosted glass look and chose to work with two layers for the component. The first layer is basically a gradient. For the second layer, to give texture, I used a picture to create a more natural feel to it. Furthermore i wanted the user to have the possibility to have a quick sign in and next to the sign up is the sign in to keep ways short."
                    href={
                      <a href="https://dribbble.com/Matt_RdF">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day2}
                    alt="app logo"
                    headline="day 2 - credit card checkout"
                    p="

                    My goal was to recreate a real credit card wallet which, when you slide your cards up, you see all of them at once. I decided not to go with swiping through the options, because I wanted the user to see all payment methods at once.
                    
                    "
                    href={
                      <a href="https://dribbble.com/Matt_RdF">
                        View at dribbble
                      </a>
                    }
                  />
                </Details>
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
