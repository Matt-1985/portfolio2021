import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Contact from "../components/Contact";
import home from "../images/home.png";
import local2 from "../images/local_2.png";
import local3 from "../images/local_3.png";
import research1 from "../images/research1.png";
import research2 from "../images/research2.png";
import bulb from "../images/bulb.png";
import marie from "../images/marie.png";
import dennis from "../images/dennis.png";
import info from "../images/infoarchi.png";
import flow1 from "../images/flow1.png";
import flow2 from "../images/flow2.png";
import bar from "../images/bar.png";
import bar2 from "../images/bar2.png";
import bar3 from "../images/bar3.png";
import motivations from "../images/motivations.png";
import frustrations from "../images/frustrations.png";
import goals from "../images/goals.png";
import settings from "../images/Settings.png";
import settingsp from "../images/settingsp.png";
import onechoosenarticle from "../images/1choosenarticle.png";
import onechoosenarticlep from "../images/1choosenarticlep.png";
import basket from "../images/basket.png";
import basketp from "../images/basketp.png";
import checkout from "../images/checkout.png";
import checkoutp from "../images/checkoutp.png";
import confirmation from "../images/confirmationscreen.png";
import confirmationp from "../images/confirmationscreenp.png";
import homescreen from "../images/homescreen.png";
import homescreenp from "../images/homescreenp.png";
import shophomescreen from "../images/shophomescreen.png";
import shophomescreenp from "../images/shophomescreenp.png";
import productscreen from "../images/productscreen.png";
import productscreenp from "../images/productscreenp.png";
import local from "../images/local1_gif.gif";

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

const Project2 = () => {
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
                    <H1>local local</H1>
                    <br />
                    <H2>
                      Shop in your favourite local business and support them
                      during the Covid pandemic...and beyond!
                    </H2>
                  </Headline>
                  <P>
                    The covid pandemic did hit every business hard. The small
                    local businesses were the most impacted, as most of them
                    lacks a proper website or access to professional, digital
                    selling tools.
                    <br /> During my time in the Coding bootcamp one of the
                    ideas for a project was to develop a delivery service. This
                    delivery service would be specialized in, and
                    professionalized for, local businesess like Boutiques,
                    jewlery retailer, or plant shops. As this idea was to
                    complex to develop I decided to give my heartfelt project
                    another shot.
                    <br />
                    <b>&quot;local local&quot;</b> was born. An app, that
                    supports local businesses, saves and creates new job
                    possibilities and on top of that is total enviroinment
                    friendly &#40;compared to regular online shopping&#41;
                  </P>
                  <a
                    href="https://www.figma.com/proto/XlBSbNBZ1i1Bb4xa79mXj1/UX-Essentials-delivery-service?node-id=29%3A0&scaling=scale-down&page-id=0%3A1"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button> Check out the prototype </Button>
                  </a>
                </IssueContainer>
              </Col>
            </Row>
            <hr />
            <Row sm={2} md={12} xl={10} xxl={12}>
              <Col>
                <ProcessContainer>
                  <Headline>
                    <H1>The Process</H1>
                    <br />
                    <H2>
                      ...or &quot;Simple is hard. Easy is harder. Invisible is
                      hardest&quot; — Jean-Louis Gassée
                    </H2>
                  </Headline>
                  <span>
                    For my latest project I decided to messure the time I need
                    for certain tasks to see in which field I can improve:
                  </span>
                  <br />
                  <CircleContainer>
                    <Circle>
                      <div style={{ color: "var(--secondary-font-color)" }}>
                        <b>
                          Full Project
                          <br />
                          10 days
                        </b>
                      </div>
                    </Circle>
                    <Link to="#research">
                      <Circle>
                        <div>
                          Base level research <br />
                          <b>1 day</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#problem_statement">
                      <Circle>
                        <div>
                          Create problem statement
                          <br />
                          <b>1 day</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#survey">
                      <Circle>
                        <div>
                          Conduct surveys <br />
                          <b>1 day</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#personas">
                      <Circle>
                        <div>
                          Create Personas
                          <br />
                          <b>1 day</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#userflow">
                      <Circle>
                        <div>
                          Create user flows & information architecture
                          <br />
                          <b>2 days</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#wireframe_prototype">
                      <Circle>
                        <div>
                          Design wireframe <br />
                          <b>2 days</b>
                        </div>
                      </Circle>
                    </Link>
                    <Link to="#wireframe_prototype">
                      <Circle>
                        <div id="wireframe_prototype">
                          Design prototype <br />
                          <b>2 days</b>
                        </div>
                      </Circle>
                    </Link>
                  </CircleContainer>
                  <span>My key take aways are:</span>
                  <ul>
                    <li>
                      <b>I needed more time...</b> <br /> ...for the survey and
                      the analasis of it. Data is precious and need more time to
                      taking care of.
                    </li>
                    <li>
                      <b>I was very quick...</b> <br />
                      ...with drawing the wireframes. The estimated time for the
                      sketches was two days, I was able to manage it in one.
                    </li>
                  </ul>
                  <Col sm={2} md={12} push={{ xl: 6 }} xxl={12}></Col>
                </ProcessContainer>
              </Col>
            </Row>

            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1 id="research">base level research</h1>

                  <h2>
                    <i>the big questionmark</i>
                  </h2>
                  <p>
                    The first thing I did was to identify competitors, the
                    market and their users. Since this project is quite unique
                    &#40;the app is a mashup of a classical food delivery
                    service and local retail-delivery&#41; it was challening to
                    find somethin fitting. Nevertheless I managed to stick with
                    four services and made them my benchmark:
                  </p>
                  <img src={research1} alt="market research" />
                  <img src={research2} alt="market research" />
                  <p>
                    To back up my assumptions about my potenial user groups I
                    started a servey. I asked 45 participants who they are and
                    which delivery-service they use. Then I gathered the
                    responses and analysed them. This is what I learned:
                  </p>
                  <img src={bar} alt="bar chart" />

                  <img src={bar2} alt="bar chart" />

                  <img src={bar3} alt="bar chart" />
                  <p>My key learnings after the evaluation:</p>
                  <KeyTakeAway>
                    <ul>
                      <li>
                        <b>The identified user is between 20 and 40.</b>
                      </li>
                      <li>
                        <b>
                          The identified user is currently in a relationship or
                          married.
                        </b>
                      </li>
                      <li>
                        <b>
                          The identified user lives with its partner or by
                          themselves.
                        </b>
                      </li>
                    </ul>
                  </KeyTakeAway>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12} xxl={12}>
              <Col>
                <DetailReversed>
                  <h1 id="problem_statement">Problem statement</h1>
                  <p>
                    After I&apos;ve defined my user group I needed to identify
                    and explain my &quot;problem&quot; in a concise but detailed
                    way. This included identifying who the problem impacts, what
                    the impacts are, where the problem occurs and why and when
                    it needs to be fixed:
                  </p>
                  <TextBox>
                    <p style={{ textAlign: "left" }}>
                      Like other delivery services for food or groceries there
                      should be a delivery service for the small, local
                      businesses too. since these are our vulnerable businesses
                      of the cities during the COVID crisis and they are
                      struggling to survive. Imagine how those businesses could
                      profit if their target group would be able to shop safely
                      via an app.{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      There is no such a thing than a central delivery service
                      for small, local businesses. Long-term our cities will
                      lose their attractiveness, because all city centers will
                      look the same and only big chains can afford to have
                      stores. For the customers that support local businesses to
                      go to the cities will become less attractive and that will
                      lead to a chain reaction to more dying businesses.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Even now, during Corona & lockdown there are up to 30%
                      less customers in the cities, so Stefan Genth from
                      Handelsverband Deutschland &#40;HDE&#41; say.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      What can we do? We should offer a central solution for
                      those businesses. Allow them to make any profit with the
                      extra benefit of fast delivery within the city.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Customers would, like they are used to with Lieferando,
                      Gorillas or Flaschenpost, take advantage of this system
                      and automatically help to keep our cities diverse, create
                      new jobs &#40;bike drivers&#41;, reduce their delivery
                      times to the customer and have a considerable reduction of
                      their carbon footprint.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <b>The conclusion:</b>
                      <br /> In hard times like this small businesses are left
                      out in terms of digital development and its benefits. They
                      are important for the attractiveness for our cities and
                      they should have a chance to remain their business. A
                      simple and effective fix for the local shops would be a
                      digital solution that will support them to increase their
                      profit and help them to survive.
                    </p>
                  </TextBox>
                  <PNG>
                    <img
                      style={{ boxShadow: "none" }}
                      src={bulb}
                      alt="light bulb"
                    />
                  </PNG>
                </DetailReversed>
              </Col>
            </Row>
            <Row sm={2} md={6} l={12} xl={12} xxl={12}>
              <Col>
                <Details>
                  <h1 id="survey">Survey</h1>
                  <p>
                    I asked around 40 people to answer a few questions from an
                    online survey form I created. I wanted to get to know the
                    profile of the future user of the app and find out their
                    motivations, frustrations and goals:
                  </p>
                  <img
                    style={{ boxShadow: "none" }}
                    src={motivations}
                    alt="pie chart"
                  />

                  <img
                    style={{ boxShadow: "none" }}
                    src={frustrations}
                    alt="pie chart"
                  />

                  <img
                    style={{ boxShadow: "none" }}
                    src={goals}
                    alt="pie chart"
                  />
                  <p>My key take aways are:</p>
                  <KeyTakeAway>
                    <ul>
                      <li>
                        <b>Assortment is key. </b>
                        Even if there is a lot of choice the wish of more high
                        quality articles is there.
                      </li>
                      <li>
                        <b>Wrong delivery time can be a turn off. </b>
                        This feature should be as precise as possible. Or offer
                        the possibility to call the delivery person.
                      </li>
                      <li>
                        <b>Payment options shouldn&apos;t be limited. </b>
                        The more options you offer the higher can be the
                        conversion rate.
                      </li>
                      <li>
                        <b>
                          Bike delivery is environmental friendly, easy to track
                          and makes even the same day delivery possible.
                        </b>
                      </li>
                      <li>
                        <b>
                          There are factors, like fees or wages, I do not have
                          any influence on.
                        </b>{" "}
                        The recommendation is to keep the values as transparent
                        as possible (such as VAT, delivery fee). A discussion on
                        breaking how much of the delivery fee goes to the
                        deliverer is an option.
                      </li>
                    </ul>
                  </KeyTakeAway>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12}>
              <Col>
                <PersonaContainer>
                  <h1 id="personas">Personas</h1>
                  <p>
                    Based on the survey, I created a user persona design to make
                    it more realistic when compared to the goals. <br />
                    Those are not real people since the survey was anonymous.
                  </p>

                  <img src={marie} alt="" />

                  <img src={dennis} alt="" />
                </PersonaContainer>
              </Col>
            </Row>

            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1 id="userflow">Information architecture & user flow</h1>
                  <p>
                    After I defined my fictional users I started with the
                    information architecture to visualize the hirachi in my app.
                    It serves as a director and helps to make sense of
                    information:
                  </p>
                  <img src={info} alt="Information hirachi" />
                  <p>
                    There are a couple of different pathways a user can take
                    when interacting with the app. Therefore it was important
                    for me to understand the possibilities I had to offer. I
                    also revisited <i>Lieferando </i>, <i>Amazon </i> and{" "}
                    <i>asos</i> to check how processes work in detail to
                    implement those into the app.
                  </p>
                  <img src={flow1} alt="user flow log in and sign up process" />
                  <img
                    src={flow2}
                    alt="user flow from startscreen to the live tracker screen"
                  />
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12}>
              <Col>
                <Comparison>
                  <h1 id="wireframe_prototype">Wireframes & Prototyes</h1>
                  <p>
                    Since the survey, I knew that my design will be inspired by
                    <i> Lieferando</i>. On the other hand, I could try to
                    implement a couple of features from other e-retailers. I
                    chose this way to design the app out of two reasons (
                    <i>hover to turn images </i>😉):
                  </p>
                  <KeyTakeAway>
                    <ul>
                      <li>
                        <b>
                          The majority of the participants knows and used
                          Liefrando.
                        </b>{" "}
                        I was able to use this information to create a similar
                        UI which should facilitate the entry to the app.
                      </li>
                      <li>
                        <b>
                          The main end user profile is the so called &quot;
                          <i>millennial</i>
                          &quot;.
                        </b>{" "}
                        By definition this user group is between 20 and 40 and
                        more open and adaptive to change.
                      </li>
                    </ul>
                  </KeyTakeAway>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Settings menu</b>
                      </p>
                      <p>
                        {" "}
                        The setting menu is similar to what users know from
                        Liefrando. This was important for me because it can be
                        very painful to search for the settings options
                        especially when new to an app.
                      </p>
                    </TextContainer>

                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={settings}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={settingsp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Homescreen</b>{" "}
                      </p>
                      <p>
                        With the homescreen I tried to follow the same approach.
                        By default the user will see the local shops sorted by
                        distance. The user will also have the option to filter
                        by category to find the desired items as quick as
                        possible.
                      </p>
                    </TextContainer>

                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={homescreen}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={homescreenp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Shop homescreen</b>{" "}
                      </p>
                      <p>
                        If the user selects a store, this is what the user will
                        see. It`&apos;s a mashup of Lieferandos restaurant site
                        UI and a couple of e-retailer inspirations like asos and
                        Amazon.
                        <br /> Because its retail here, I put in a &quot;
                        <b>Deals</b>&quot; and &quot;<b>New in</b>&quot; section
                        for a similar look and feel and a quicker conversion of
                        the user.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={shophomescreen}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={shophomescreenp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Category screen</b>{" "}
                      </p>
                      <p>
                        When the user selects a category, the user will be able
                        to infinte scroll through the article list. As it is
                        common practice in the observed online shops I
                        implemented in the app as well.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={productscreen}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={productscreenp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Selected item</b>{" "}
                      </p>
                      <p>
                        I tried to keep the design for this screen as clean as
                        possible with given the necessary information that the
                        user needs to have. In the{" "}
                        <a
                          href="https://www.figma.com/proto/XlBSbNBZ1i1Bb4xa79mXj1/UX-Essentials-delivery-service?node-id=29%3A0&scaling=scale-down&page-id=0%3A1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          prototype
                        </a>{" "}
                        you will see movement in the image. To draw attention
                        this can be used for special articles, limited editions
                        etc.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={onechoosenarticle}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={onechoosenarticlep}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Basket</b>{" "}
                      </p>
                      <p>
                        The basket is Amazon inspired and offers the possibility
                        to let the store know that this will be a present. I
                        have decided to put the{" "}
                        <i>You could like this as well </i>
                        section a stage earlier too, to keep the focus on the
                        basket details.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={basket}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={basketp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Checkout</b>{" "}
                      </p>
                      <p>
                        During checkout the user has the option to change either
                        the payment or the delivery adresse. Which is
                        interesting in case you are sending a present to someone
                        else.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={checkout}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={checkoutp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <FlipCardContainer>
                    <TextContainer>
                      <p>
                        <b>Confirmation</b>{" "}
                      </p>
                      <p>
                        The confirmation is as important to a good overall
                        experience as everything else. Here I wanted to take the
                        chance to thank the customer and show the final delivery
                        details. Since the live tracking is an admired feature I
                        decided to give it a full page which is accessible
                        through a button.
                      </p>
                    </TextContainer>
                    <FlipCardInner>
                      <FlipCardFront>
                        <FlipCardImage
                          src={confirmation}
                          alt="image of a wireframe"
                        />
                      </FlipCardFront>
                      <FlipCardBack>
                        <FlipCardImage
                          src={confirmationp}
                          alt="image of a prototype"
                        />
                      </FlipCardBack>
                    </FlipCardInner>
                  </FlipCardContainer>
                  <p></p>
                </Comparison>
              </Col>
            </Row>
            <Row sm={2} xl={8}>
              <Col>
                <ProductContainer>
                  <Headline>
                    <H1>The product</H1>
                    <br />
                    <H2>
                      Always one step closer to keep improving my UX Designer
                      skills
                    </H2>
                  </Headline>
                  <Col sm={11} xl={12} xxl={10}>
                    <P>
                      <a
                        href="https://www.figma.com/proto/XlBSbNBZ1i1Bb4xa79mXj1/UX-Essentials-delivery-service?node-id=29%3A0&scaling=scale-down&page-id=0%3A1"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <MockUp src={local} alt="local app" />
                      </a>
                      What an experience. From the idea to the execution I
                      wrapped all steps up, to realize one of my first and
                      favourite projects.
                      <br /> The deadlines I given to myself were proven to be
                      realistic, but for some fields more time might be needed
                      in the future. That is helping me to be more precise about
                      my time management, and also when to identify that more
                      time is needed to aquire more knowledge in certain fields
                      and how much extra time i should dedicate for those.
                    </P>{" "}
                  </Col>
                </ProductContainer>
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

export default Project2;
