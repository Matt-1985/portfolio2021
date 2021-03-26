import React from "react";
import styled from "styled-components";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import Contact from "../components/Contact";
import mockUp from "../images/mockUpChoicely.png";
import issueS from "../images/issueS.png";
import processS from "../images/processS.png";

const theme = {
  blue: {
    default: "#0090ff",
    hover: "#71c2ff",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #fffffa;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px #d3d3d3;
  transition: ease background-color 250ms;
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

const ImgLeft = styled.img`
  ${mediaQueries("sm")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`};
`;

const ProcessContainer = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  ul,
  li {
    font-size: inherit;
    font-family: "SpaceMonoRegular";
    color: var(--main-font-color);
    line-height: 30px;
    text-indent: 1em;
    padding-bottom: 1em;
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
`;

const ImgLeftBottom = styled.img`
  max-width: 250%;
  max-height: 250%;

  ${mediaQueries("sm")`
    
  max-width: 200%;
  max-height: 200%;`};
`;

const Details = styled.div`
  font-family: "NimbusRegular";
  color: var(--secondary-font-color);
  margin: 2rem;
  padding: 2rem;
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
    line-height: 40px;
    text-indent: 1em;
  }
  h1 {
    font-family: "SpaceMonoBold";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 3rem;
  }
  h2 {
    margin: 0;
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 8vw;
  margin-bottom: 0;
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
  margin: 0;
  text-transform: uppercase;
  ${mediaQueries("sm")`
   font-size: 1rem;
    `};
`;

const P = styled.p`
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

const Figure = styled.figure`
  font-family: "SpaceMonoBold";
  font-size: 5rem;
  color: var(--secondary-font-color);
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
  &:hover {
    font-family: "Times New Roman", serif;
    font-size: 5rem;
    font-style: italic;
    color: var(--main-font-color);
    animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes scale-down-center {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.5);
      }
    }
  }
`;

const Blockquote = styled.blockquote`
  text-align: center;
  text-indent: -0.45em;
  quotes: "“" "”" "‘" "’";
  :before {
    content: open-quote;
  }
  :after {
    content: close-quote;
  }
  @supports (hanging-punctuation: first) {
    blockquote {
      text-indent: 0;
      hanging-punctuation: first;
    }
  }

  ${mediaQueries("sm")`
    font-size: 2rem;
    `};
`;

const Figcaption = styled.figcaption`
  text-align: right;
  ${mediaQueries("sm")`
    font-size: 1rem;
    `};
`;

const Project1 = () => {
  return (
    <ScreenClassProvider>
      <ParallaxProvider>
        <GlobalStyle />
        <main>
          <Container fluid>
            <Row>
              <Col sm={2} md={6}>
                <ImgLeft src={issueS} alt="Hungry woman" />
              </Col>
              <Col sm={2} md={6}>
                <IssueContainer>
                  <H1>choicely </H1>
                  <H2>
                    helps the user to make decisions for eating by showing
                    different restaurants
                  </H2>
                  <P>
                    Hungry? Undecided? Lots of time wasted?
                    <br /> Sounds familiar, doesn&apos;t it? Finding something
                    satisfying to eat when you are hungry can end up in a
                    neverending <i>no-you-decide-game</i> with your loved ones.
                    Or even ending with you grabing some snacks to fill your
                    gap. <br /> As I rely to this behavior a way too much, I
                    created my first App: choicely!
                  </P>
                  <a
                    href="https://choicely.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button> Hungry? Check out the App </Button>
                  </a>
                </IssueContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <Details>
                  <Figure>
                    <Blockquote>You are not you when you are hungry</Blockquote>
                    <Figcaption>&mdash; Snickers</Figcaption>
                  </Figure>
                </Details>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xl={4} push={{ xl: 7 }}>
                <ImgRight src={processS} alt="Woman is working" />
              </Col>
              <Col sm={2} xl={8} pull={{ xl: 4 }}>
                <ProcessContainer>
                  <H1>The Process</H1>
                  <H2>...or &quot;learn, try, fail, repeat&quot;</H2>
                  <P>
                    From product design to UX/UI experience to development I was
                    responsible for all steps in the process chain. Since this
                    was my final project of a Coding Bootcamp, I had to deepen
                    my programming skills and fastly enhance my experience in 4
                    weeks. Here are some key achievements:
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
                </ProcessContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <Details>
                  <h1>
                    Understanding the Problem
                    <h2>
                      <i>...and finding solutions</i>
                    </h2>
                  </h1>
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
            <Row>
              <Col sm={2} xl={4}>
                <ImgLeftBottom src={mockUp} alt="choicely mock up on iphones" />
              </Col>
              <Col sm={2} xl={8}>
                <ProductContainer>
                  <H1>The final Product</H1>
                  <H2>Bon Appetit!</H2>
                  <P>
                    Hungry? Undecided? Lots of time wasted?
                    <br /> Sounds familiar, doesnt it? Finding something
                    satisfying to eat if you hungry can end up in a{" "}
                    <i>no-you-decide-game</i> with your loved ones or Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum laborum dolores iste fugiat dicta aut
                    asperiores, doloribus reprehenderit. Neque velit modi sunt
                    vitae temporibus quae, ut quasi cum ullam.
                  </P>
                </ProductContainer>
              </Col>
            </Row>
          </Container>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </ParallaxProvider>
    </ScreenClassProvider>
  );
};

export default Project1;

// Wrapper.propTypes = {
//   className: PropTypes.string,
// };
