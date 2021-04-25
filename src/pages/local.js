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
  li {
    font-size: 1.3rem;
    font-family: "SpaceMonoRegular";
    color: var(--main-font-color);
    line-height: 1.5em;
    padding-bottom: 1em;
    ${mediaQueries("sm")`
  font-size: 0.9rem;`};
  }
  span {
    font-size: 1.3rem;
    font-family: "SpaceMonoRegular";
    color: var(--main-font-color);
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
    :hover {
      width: 95vw;
      height: 100%;
    }
    ${mediaQueries("sm")`
    :active {
      width: 100vw;
      height: 100%;
    }
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
    margin-left: 0;
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

const PersonaContainer = styled.div`
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
  /* img {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 20%);
    ${mediaQueries("sm")`
    :active {
      width: 100vw;
      height: 100%;
    }
    `}; */
`;

const Comparison = styled.div`
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
      width: 50vw;
      height: 100%;
    }
    `};
  }
`;

const CircleContainer = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries("sm")`
    flex-direction: column;
    `};
`;

const Circle = styled.div`
  margin-left: 20px;
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
  margin: 3rem;
  height: 950px;
  width: 450px;
  border-radius: 12px;
  display: grid;
  grid-template-rows: auto auto 3fr;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
`;

// const TooltipSVG = styled.div`
//   color: var(--main-font-color);
//   width: 5em;
//   height: 5em;
//   cursor: pointer;
//   z-index: -10;
// `;

// const TooltipBox = styled.div`
//   position: absolute;
//   left: 30px;
//   visibility: hidden;
//   color: transparent;
//   background-color: transparent;
//   width: 100%;
//   /* padding: 5px 5px; */
//   border-radius: 20px;
//   transition: visibility 0.2s, color 0.2s, background-color 0.2s, width 0.2s,
//     padding 0.2s ease-in-out;
//   z-index: 2;
//   &:before {
//     content: "";
//     width: 0;
//     height: 0;
//     left: 40px;
//     top: -10px;
//     position: absolute;
//     border: 10px solid transparent;
//     transform: rotate(135deg);
//     transition: border 0.2s ease-in-out;
//   }
//   p {
//     font-family: "SpaceMonoBold";
//     font-size: 2rem;
//     color: var(--secondary-font-color);
//   }
// `;
// const TooltipCard = styled.div`
//   width: 23%;
//   margin: 2em;
//   position: relative;
//   & ${TooltipSVG}:hover + ${TooltipBox} {
//     visibility: visible;
//     color: #fff;
//     background-color: rgba(240, 255, 31, 0.39);
//     width: 230px;

//     &:before {
//       border-color: transparent transparent rgb(240, 255, 31)
//         rgba(240, 255, 31, 0.39);
//     }
//   }
// `;

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
              <Col>
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
                  <P>
                    For my latest project I decided to messure the time I need
                    for certain tasks to see in which field I can improve:
                  </P>
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
                    <Circle>
                      <div>
                        Base level research <br />
                        <b>1 day</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Create problem statement
                        <br />
                        <b>1 day</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Conduct surveys <br />
                        <b>1 day</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Create Personas
                        <br />
                        <b>1 day</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Create user flows & information architecture
                        <br />
                        <b>2 days</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Design wireframe <br />
                        <b>2 day</b>
                      </div>
                    </Circle>
                    <Circle>
                      <div>
                        Design prototype <br />
                        <b>2 days</b>
                      </div>
                    </Circle>
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
                      sketches was two days, I did it in 1.
                    </li>
                  </ul>
                  <Col sm={2} md={12} push={{ xl: 6 }} xxl={12}></Col>
                </ProcessContainer>
              </Col>
            </Row>

            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1>base level research</h1>
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
                  <p>The learnings will be influencing the design strongly. </p>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12} xxl={12}>
              <Col>
                <DetailReversed>
                  <h1>Problem statement</h1>
                  <p>
                    After I&apos;ve defined my user group I needed to identify
                    and explain my &quot;problem&quot; in a concise but detailed
                    way. This included identifying who the problem impacts, what
                    the impacts are, where the problem occurs and why and when
                    it needs to be fixed:
                  </p>
                  <TextBox>
                    <p>
                      Like other delivery services for food or groceries there
                      should be a delivery service for the small, local
                      businesses too. since these are our vulnerable businesses
                      of the cities during the COVID crisis and they are
                      struggling to survive. Imagine how those businesses could
                      profit if their target group would be able to shop safely
                      via an app.{" "}
                    </p>
                    <p>
                      {" "}
                      There is no such a thing than a central delivery service
                      for small, local businesses. Long-term our cities will
                      lose their attractiveness, because all city centers will
                      look the same and only big chains can afford to have
                      stores. For the customers that support local businesses to
                      go to the cities will become less attractive and that will
                      lead to a chain reaction to more dying businesses.
                    </p>
                    <p>
                      {" "}
                      Even now, during Corona & lockdown there are up to 30%
                      less customers in the cities, so Stefan Genth from
                      Handelsverband Deutschland &#40;HDE&#41; say.
                    </p>
                    <p>
                      What can we do? We should offer a central solution for
                      those businesses. Allow them to make any profit with the
                      extra benefit of fast delivery within the city.
                    </p>
                    <p>
                      {" "}
                      Customers would, like they are used to with Lieferando,
                      Gorillas or Flaschenpost, take advantage of this system
                      and automatically help to keep our cities diverse, create
                      new jobs &#40;bike drivers&#41;, reduce their delivery
                      times to the customer and have a considerable reduction of
                      their carbon footprint.
                    </p>
                    <p>
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
                  <h1>Survey</h1>
                  <p>
                    I asked around 40 people to to answer a few questions from
                    the online survey form I created. I wanted to get to know
                    the future user of the app and find out about their
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
                  <ul>
                    <li>
                      <b>
                        Assortment is key.
                        <br /> Even if there is a lot of choice the wish of more
                        high quality articles is there.
                      </b>
                    </li>
                    <li>
                      <b>
                        Wrong delivery time can be a turn off.
                        <br /> This feature should be as precise as possible. Or
                        offer the possibility to call the delivery person.
                      </b>
                    </li>
                    <li>
                      <b>
                        Payment options shouldn&apos;t be limited.
                        <br /> The more options you offer the higher can be the
                        conversion rate.
                      </b>
                    </li>
                    <li>
                      <b>
                        Bike delivery is environmental friendly, easy to track
                        and makes even the same delivery possible.
                      </b>
                    </li>
                    <li>
                      <b>
                        There are factors like the fees or the wages I do not
                        have any influence of. The only thing what would make
                        sense here is to keep the communication in the app
                        regarding this topic as transparent as possible
                      </b>
                    </li>
                  </ul>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12}>
              <Col>
                <PersonaContainer>
                  <h1>Personas</h1>
                  <p>
                    I created a user persona design, based on the survey of the
                    project.
                  </p>

                  <img src={marie} alt="" />

                  <img src={dennis} alt="" />
                </PersonaContainer>
              </Col>
            </Row>
            <hr />
            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1>Information architecture & user flow</h1>
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
                    also revisited <i>Lieferando</i>,<i>Amazon</i> and{" "}
                    <i>asos</i> to check how the processes work in detail to
                    implement these into the app.
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
                  <h1>Wireframes & Prototyes</h1>
                  <p>
                    For the development of my App I used the following tools and
                    languages:
                  </p>
                  <FlipCardContainer>
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
                </Comparison>
              </Col>
            </Row>
            <Row sm={2} xl={8}>
              <Col>
                <ProductContainer>
                  <Headline>
                    <H1>The final Product</H1>
                    <br />
                    <H2>Bon Appetit!</H2>
                  </Headline>
                  <P>
                    <a
                      href="https://choicely.herokuapp.com/"
                      rel="noreferrer"
                      target="_blank"
                    ></a>
                    After four months of planning, designing & developing{" "}
                    <b>choicely</b> I can finally present, fully proud, a
                    ready-to-use app that I developed from scratch. <br /> The
                    actual version of the app includes the possibility to find
                    restaurants at the moment. For the future, <em>however</em>,
                    I plan to support the user finding fitting entertainment,
                    like movies or series, or even short trips for vacation.{" "}
                    <br />
                  </P>
                </ProductContainer>
              </Col>
            </Row>
          </Container>
          <section id="contact">
            <Contact />
            <Fab
              mainButtonStyles={{ backgroundColor: "#e879de" }}
              style={{ bottom: 24, right: 24 }}
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
