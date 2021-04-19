import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { NodeDotJs } from "@styled-icons/simple-icons/NodeDotJs";
import { Storybook } from "@styled-icons/simple-icons/Storybook";
import { Adobexd } from "@styled-icons/simple-icons/Adobexd";
import { Express } from "@styled-icons/simple-icons/Express";
import { Reactrouter } from "@styled-icons/simple-icons/Reactrouter";
import { Github } from "@styled-icons/simple-icons/Github";
import { Html5 } from "@styled-icons/simple-icons/Html5";
import { Css3 } from "@styled-icons/simple-icons/Css3";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Contact from "../components/Contact";
import home from "../images/home.png";
import local1 from "../images/local_1.png";
import local2 from "../images/local_2.png";
import local3 from "../images/local_3.png";
import processS from "../images/processS.png";
import diagram from "../images/diagram.png";
import first from "../images/first-decision.png";
import choose from "../images/choose1.png";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import outcome from "../images/outcome-detail.png";
import choicelyGif from "../images/choicelyGif1.gif";

const TechStack = styled.div`
  margin-left: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 100%;
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
  p {
    font-family: "Montserrat", sans-serif;
    color: var(--secondary-font-color);
    font-size: 1rem;
  }
  img {
  }
  ${mediaQueries("sm")`
  margin: 0;
  
`};
`;

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
`;

const ImgRight = styled.img`
  ${mediaQueries("sm")`
  width: 100%;
  height: 150%;
  object-fit: contain;`};
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
    width: 60%;
    height: 60%;
    box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 20%);
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
`;

const ScreenHeadline = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

const MockUp = styled.img`
  shape-outside: url(${choicelyGif});
  shape-margin: 1em;
  margin: 1em;
  float: left;
  width: 30vw;
  ${mediaQueries("sm")`
  width: 100vw;
  height: 100%;
  margin: 0.5em;
    float: top;
    `};
`;

const TooltipSVG = styled.div`
  color: var(--main-font-color);
  width: 5em;
  height: 5em;
  cursor: pointer;
  z-index: -10;
`;

const TooltipBox = styled.div`
  position: absolute;
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 100%;
  /* padding: 5px 5px; */
  border-radius: 20px;
  transition: visibility 0.2s, color 0.2s, background-color 0.2s, width 0.2s,
    padding 0.2s ease-in-out;
  z-index: 2;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.2s ease-in-out;
  }
  p {
    font-family: "SpaceMonoBold";
    font-size: 2rem;
    color: var(--secondary-font-color);
  }
`;
const TooltipCard = styled.div`
  width: 23%;
  margin: 2em;
  position: relative;
  & ${TooltipSVG}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(240, 255, 31, 0.39);
    width: 230px;

    &:before {
      border-color: transparent transparent rgb(240, 255, 31)
        rgba(240, 255, 31, 0.39);
    }
  }
`;

const Project1 = () => {
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
                  <ul>
                    <li>
                      <b>Break the project into 4 workable sprints.</b> I was
                      able to effectively plan & apply sprints to my project to
                      make it clear and easy to have a complete overview of it.
                    </li>
                    <li>
                      <b>Execute end to end.</b> I was able to code the final
                      design in a short period of time showing my ability to
                      execute and ship features as a Web Developer effectively.
                    </li>
                    <li>
                      <b>Working in a Team.</b> Even if everybody was working on
                      their own project, during the final phase we met daily
                      through Zoom to exchange knowledge, support each other and
                      keep up on our team spirit.
                    </li>
                    <li>
                      <b>Present my final App in front of an audiance.</b> Full
                      of joy and sense of accomplishment, I pitched my App on
                      the closing event of the Bootcamp in front of potential
                      employers, my collegues and the other participants of the
                      event.
                    </li>
                  </ul>
                  <Col sm={2} md={12} push={{ xl: 6 }} xxl={12}>
                    <ImgRight src={processS} alt="Woman is working" />
                  </Col>
                </ProcessContainer>
              </Col>
            </Row>

            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1>Understanding the Problem</h1>
                  <h2>
                    <i>...and coming to conclusions</i>
                  </h2>
                  <p>
                    I worked at my first sprint using the persona approach to
                    identify the users needs. Therefore i broke down the problem
                    into 3 parts, presenting for each part a solution:
                  </p>
                  <ul>
                    <li>
                      The user using the app is <b>undecided</b> in finding
                      something to eat. The user then needs a support in making
                      that decision.
                    </li>
                    <li>
                      The user recognizes that <b>it spends too much time</b>{" "}
                      searching for fitting restaurants. The user needs to be
                      quicker making the decision.
                    </li>
                    <li>
                      There are <b>two different kinds of users</b>: One that
                      needs the App to make the whole decision. The other has an
                      idea of the direction but needs finetuning. The user needs
                      two different usability profiles.
                    </li>
                  </ul>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12} xxl={12}>
              <Col>
                <DetailReversed>
                  <h1>Product vision and solution</h1>
                  <p>From these findings, I decided to identify key goals:</p>
                  <ul>
                    <li>
                      <b>
                        I want users to get quick support. Minimalistic and
                        goal-oriented design that let the user focus on what
                        matters.
                      </b>
                    </li>
                    <li>
                      <b>
                        I want users to have a choice. Two different modes to
                        allow them to have flexibility but still reach their
                        goal without time waste.
                      </b>
                    </li>
                  </ul>
                  <p>
                    As a starting point, I did some market research to check if
                    there are similar products out there.
                    <br />
                    Not able to find any product specificly, I took inspiration
                    from particular features that I found in apps that helps in
                    decision making combining with apps that offer restaurant
                    listing.
                  </p>
                </DetailReversed>
              </Col>
            </Row>
            <Row sm={2} md={6} l={12} xl={12} xxl={12}>
              <Col>
                <Details>
                  <h1>Defining the diagram</h1>
                  <p>
                    With all this information in my hands I started with a
                    diagram to visualize the architecture and worked out the
                    following key user story:
                  </p>
                  <img src={diagram} alt="" />
                  <ul>
                    <li>
                      <b>Choose a path.</b> Users can decide if they want quick
                      support or they can choose between mutliple filters
                    </li>
                  </ul>
                  <p>
                    In order for me to begin with the development, I created a
                    mock up of the App based off the diagram and came up with
                    the following:
                  </p>
                  <ul>
                    <li>First decision screen</li>
                    <li>Choose your support option</li>
                    <li>Option 1: random restaurants</li>
                    <li>
                      Option 2: Filter your options to get specific restaurants
                    </li>
                    <li>Outcome</li>
                  </ul>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12}>
              <Col>
                <DetailReversed>
                  <h1>Designs</h1>
                  <p>
                    With the clock ticking, I went over to the desired styling.
                    I opted for a minimal & clean look and the simplicity of the
                    UI. I then created a{" "}
                    <a href="https://xd.adobe.com/view/44d48e9e-5149-4cc0-b778-ac510462461e-1187/">
                      clickable prototype in Adobe XD.
                    </a>{" "}
                    Since four eyes see more than two I sent the prototype to
                    check to our coaches and my collegues to get their feedback
                    on what and how to improve on the design.
                    <br /> I really appreciate the time that they took and tried
                    to consider the most of the feedback in the developnment.
                  </p>
                  <br />
                  <ScreenHeadline>First decision screen</ScreenHeadline>
                  <p>
                    <br />
                    This screen was created to deal with future features like
                    offering support to find movies or short trips in mind and
                    encourage users to click on the button to get started.
                  </p>
                  <img src={first} alt="red button" />
                  <ScreenHeadline>Choose your path</ScreenHeadline>
                  <p>
                    <br />
                    Users have to choose between a quick support and the filter
                    option. The buttons are big enough and give a color
                    guidance.
                  </p>
                  <img src={choose} alt="one yellow button one green button" />
                  <ScreenHeadline>Random restaurants</ScreenHeadline>
                  <p>
                    <br />
                    Users getting now random results on what to choose of. Via
                    the refresh button on the down right side the useres have
                    the possibility to reaload new random restaurants.
                  </p>
                  <img src={option1} alt="card with restaurant" />
                  <ScreenHeadline>Filtering</ScreenHeadline>
                  <p>
                    <br />
                    Users can now choose between max. 3 filter options. They
                    will be displayed the same way like the random results but
                    the guidance color is different.
                  </p>
                  <img src={option2} alt="filter options" />
                  <ScreenHeadline>Details</ScreenHeadline>
                  <p>
                    <br />
                    Users can now push/click on the card and it will turn and
                    reveal the details on the back. With a click on the name of
                    the restaurant the users will be redirected to the exact
                    address on google maps, or they click directly on the number
                    to call in for a reservation.
                  </p>
                  <img src={outcome} alt="card with resataurant details" />
                </DetailReversed>
              </Col>
            </Row>
            <hr />
            <Row sm={2} md={6} xl={12}>
              <Col>
                <Details>
                  <h1>Development</h1>
                  <p>
                    After I finished the desing I started with the development
                    process. Spoiler Alert! I not only developed an app but also
                    had a growth professionaly and personaly during the time in
                    the Bootcamp. <br />
                    Here are some key takeaways from it:
                  </p>
                  <ul>
                    <li>
                      <b>Components:</b> Keep your project digistable and build
                      small. Reuse components. That made my life so much easier!
                    </li>
                    <li>
                      <b>Articles, Docs and a lot of YouTube:</b> Reading is
                      fundamental, so is understanding and learning how to use
                      libraries, frameworks or npm packages. Docs are not always
                      easy to understand, I had to learn to take my own time
                      while reading and use all tools available to get to the
                      goal.
                    </li>
                    <li>
                      <b>Obstacles are our friends:</b> Throughout the journey
                      of developing the app I had to face a couple of challenges
                      like functions that did not work in the beginning or
                      trouble to connect the database properly. What I learned
                      from all this is that those challenges take you also to
                      the finish line. Rather than a straight line kinda journey
                      the whole process had its peaks and valleys. I took myself
                      out of my comfort zone and focused on problem solving
                      instead of the problem itself.
                    </li>
                    <li>
                      <b>Ask for help:</b> One of my biggest learning was to ask
                      for help. Since this was my very first project I tried to
                      find out and implement as much as possible on my own.
                      Which led to some challenges, especially when it came to
                      the translation of the backend to the frontend. <br /> I
                      overcame my own resistance by refocusing from individual
                      problems to the bigger picture. I then reached out to some
                      of my collegues and coaches to get support and keep up
                      with my time shedule.
                    </li>
                  </ul>
                </Details>
              </Col>
            </Row>
            <Row sm={2} md={6} xl={12}>
              <Col>
                <DetailReversed>
                  <h1>Tech Stack</h1>
                  <p>
                    For the development of my App I used the following tools and
                    languages:
                  </p>
                  <TechStack>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Html5 />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>html</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Css3 />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>css</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Javascript />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>javascript</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://reactjs.org/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <ReactLogo />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>react.js</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://styled-components.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <StyledComponents />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>styled-components</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://storybook.js.org/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Storybook />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>storybook</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://www.adobe.com/de/products/xd.html?promoid=3NQZBBTZ&mv=other"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Adobexd />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>adobe XD</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://www.mongodb.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Mongodb />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>mongoDB</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://nodejs.org/en/about/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <NodeDotJs />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>node.js</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://expressjs.com/de/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Express />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>express</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://reactrouter.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Reactrouter />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>react router</p>
                      </TooltipBox>
                    </TooltipCard>
                    <TooltipCard>
                      <TooltipSVG>
                        <a
                          href="https://github.com/Matt-1985"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Github />
                        </a>
                      </TooltipSVG>
                      <TooltipBox>
                        <p>GitHub</p>
                      </TooltipBox>
                    </TooltipCard>
                  </TechStack>
                </DetailReversed>
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
                    >
                      <MockUp src={choicelyGif} alt="choicely app" />
                    </a>
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

export default Project1;
