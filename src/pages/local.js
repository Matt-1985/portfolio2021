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
import { Chrono } from "react-chrono";
import items from "../components/timeline.js";

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
    margin-top: 1rem;
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
  height: 11rem;
  width: 11rem;
  background-color: #6fc2a7;
  border-radius: 50%;
  box-shadow: 13px 17px 10px -6px rgba(225, 223, 223, 0.63);
  div {
    height: 11rem;
    width: 11rem;
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
                  <CircleContainer>
                    <Circle>
                      <div style={{ color: "var(--secondary-font-color)" }}>
                        <b>
                          Full Project
                          <br />9 days
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
                    find somethin fitting. Nevertheless I managed:
                  </p>
                  <img src={research1} alt="market research" />
                  <img src={research2} alt="market research" />
                  <p>
                    To back up my assumptions about my potenial user groups I
                    started a servey.
                  </p>
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

                  <ScreenHeadline>Choose your path</ScreenHeadline>
                  <p>
                    <br />
                    Users have to choose between a quick support and the filter
                    option. The buttons are big enough and give a color
                    guidance.
                  </p>

                  <ScreenHeadline>Random restaurants</ScreenHeadline>
                  <p>
                    <br />
                    Users getting now random results on what to choose of. Via
                    the refresh button on the down right side the useres have
                    the possibility to reaload new random restaurants.
                  </p>

                  <ScreenHeadline>Filtering</ScreenHeadline>
                  <p>
                    <br />
                    Users can now choose between max. 3 filter options. They
                    will be displayed the same way like the random results but
                    the guidance color is different.
                  </p>

                  <ScreenHeadline>Details</ScreenHeadline>
                  <p>
                    <br />
                    Users can now push/click on the card and it will turn and
                    reveal the details on the back. With a click on the name of
                    the restaurant the users will be redirected to the exact
                    address on google maps, or they click directly on the number
                    to call in for a reservation.
                  </p>
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

export default Project1;
