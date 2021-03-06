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
import day3 from "../images/Landing_Page.png";
import day4 from "../images/Calculator.png";
import day5 from "../images/app_icon.png";
import day6 from "../images/user_profile.png";
import day7 from "../images/UIsettings.png";
import day8 from "../images/404page.png";
import day9 from "../images/musicplayer.png";
import day10 from "../images/socialshare.png";

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
                      😉. I upload now daily one design with an additional piece
                      of my thinking process.
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
                      <a href="https://dribbble.com/shots/15587589-day-1-daily-UI-Sign-up">
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
                      <a href="https://dribbble.com/shots/15587598-day-2-daily-UI-Credit-card-checkout">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day3}
                    alt="app logo"
                    headline="day 3 - landing page"
                    p="

                    This days task was to create a landing page. The fictional brand good desire stands for sustainability and fairness and I tried to capture this through organic shapes, warm highlight colors to match the background and a clean look.
                    
                    "
                    href={
                      <a href="https://dribbble.com/shots/15587661-day-3-daily-UI-Landing-page">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day4}
                    alt="app logo"
                    headline="day 4 - calculator"
                    p="

                    When thinking of a calculator I immediately had the picture of lego bricks in my mind. I then used neumorphism to give it the bricky look and feel. The colors of the bricks should give a quick guidance for the user.
                    
                    "
                    href={
                      <a href="https://dribbble.com/shots/15589458-day-4-daily-UI-Calculator">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day5}
                    alt="app logo"
                    headline="day 5 - app icon"
                    p="
                    During my search of inspiration i found an app icon that I really liked because it was kind of whimsicle.
                    I tried to give it more depth by creating a cutting out look.
                    Work-Life Balance is a Health App that helps you with planning your day with focus on you.
                    
                    "
                    href={
                      <a href="https://dribbble.com/shots/15603885-day-5-daily-UI-App-icon">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day6}
                    alt="app logo"
                    headline="day 6 - user profile"
                    p="

                  For todays task, the user profile, I chose to continue with the cut out approach. This time a bit more elevated and cleaner. I divided the two sections via a dog's ear on the left to continue the paper like feel.                  
                  "
                    href={
                      <a href="https://dribbble.com/shots/15605191-day-6-daily-UI-User-Profile">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day7}
                    alt="app logo"
                    headline="day 7 - settings"
                    p="

                The settings are heavily inspired by the settings screen of the Gorillas app.
                I really liked the look of it. It is clean, the upper part is a bit more different than in usual apps and you see everything at a glance.                
                "
                    href={
                      <a href="https://dribbble.com/shots/15615815-day-7-daily-UI-Settings">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day8}
                    alt="app logo"
                    headline="day 8 - 404 page"
                    p="
                    This 404 Page should give some Inception vibes by placing the error page into a mockup.
                    For the CTA and the search button I choose to stick with the bright colors from the logo to give the user visually guidance.
                "
                    href={
                      <a href="https://dribbble.com/shots/15630509-day-8-daily-UI-404-Page">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day9}
                    alt="app logo"
                    headline="day 9 - music player"
                    p="

                    For the Music player I created a natural swipe flow through your library, but with the option to skip songs in the classical way.
                    The background applies the color from the song you listen to.
                    Btw this is the first time I tried to design something for the Apple watch.
                "
                    href={
                      <a href="https://dribbble.com/shots/15631362-day-9-daily-UI-Music-Player">
                        View at dribbble
                      </a>
                    }
                  />
                  <NewCard
                    src={day10}
                    alt="app logo"
                    headline="day 10 - social share"
                    p="

                    I placed the social share buttons for G'd News in an ergonomic and organic shape, easy reachable for the thumb.

I got inspired by the app of Medium which structure i really love <3.
The recipe context was borrowed by Forks over knives :)


                "
                    href={
                      <a href="https://dribbble.com/shots/15638414-day-10-daily-UI-Social-share">
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
