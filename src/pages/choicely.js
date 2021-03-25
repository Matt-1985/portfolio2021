import React from "react";
import styled from "styled-components";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";

import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import Navbar from "../components/Navigation";
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
  margin: 2rem;
  padding: 2rem;
  background-color: rgba(240, 255, 31, 0.295);
  ${mediaQueries("sm")`
    padding: 0.5rem;
    `};
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
  font-family: "NimbusRegular";
  font-size: 6rem;
  color: #242424;
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
          <Navbar />
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
                    satisfying to eat if you hungry can end up in a neverending{" "}
                    <i>no-you-decide-game</i> with your loved ones or you
                    grabing some oats to fill your gap. <br /> With me relying
                    to this behavior I created my first App: choicely!
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
                    Hungry? Undecided? Lots of time wasted?
                    <br /> Sounds familiar, doesn&apos;t it? Finding something
                    satisfying to eat if you hungry can end up in a{" "}
                    <i>no-you-decide-game</i> with your loved ones or Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Iste,
                    eveniet. Fugit sed maxime rem eligendi autem! Tempore
                    exercitationem at delectus alias. Dicta error temporibus
                    exercitationem culpa dignissimos iste aliquam ab.
                  </P>
                </ProcessContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <Details>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis iusto praesentium voluptatibus temporibus
                    delectus velit? Ea enim suscipit eos praesentium molestias.
                    Odio eligendi dolor cupiditate ullam at quasi veritatis
                    pariatur?
                  </P>
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
