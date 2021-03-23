import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import Navbar from "../components/Navigation";
import Contact from "../components/Contact";
import mockUp from "../images/mockUpChoicely.png";
import issueS from "../images/issueS.png";
import processS from "../images/processS.png";

const CaseStudyContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  ${mediaQueries("sm")`
  margin: 0;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
  `};
`;

const IssueContainer = styled.div`
  grid-area: 2 / 4 / 1 / 2;
  display: flex;
  flex-direction: column;
  ${mediaQueries("sm")`
  margin-top: 10px;
  
`};
`;

const ImgLeft = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  ${mediaQueries("sm")`
  vertical-align: middle;
  width: 40vw;
  height: 60vh;
  object-fit: contain;
`};
`;

const ProcessContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
`;

const ImgRight = styled.img`
  grid-area: 2 / 2 / 2 / 2;
  ${mediaQueries("sm")`
  width: 60vw;
  height: 80vh;
  object-fit: contain;`};
`;

const ProductContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
`;

const ImgLeftBottom = styled.img`
  max-width: 250%;
  max-height: 250%;
  grid-column: 1/2;
  grid-row: 3/4;
  ${mediaQueries("sm")`
    
    max-width: 200%;
  max-height: 200%;`};
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

const Project1 = () => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <main>
        <Navbar />
        <CaseStudyContainer>
          <ImgLeft src={issueS} alt="Hungry woman" />
          <IssueContainer>
            <H1>choicely </H1>
            <H2>
              helps the user to make decisions for eating by showing different
              restaurants
            </H2>
            <P>
              Hungry? Undecided? Lots of time wasted?
              <br /> Sounds familiar, doesn't it? Finding something satisfying
              to eat if you hungry can end up in a neverending{" "}
              <i>no-you-decide-game</i> with your loved ones or
            </P>
          </IssueContainer>

          <ImgRight src={processS} alt="Woman is working" />
          <ProcessContainer>
            <H1>The Process</H1>
            <H2>...or "learn, try, fail, repeat"</H2>
            <P>
              Hungry? Undecided? Lots of time wasted?
              <br /> Sounds familiar, doesn't it? Finding something satisfying
              to eat if you hungry can end up in a <i>
                no-you-decide-game
              </i>{" "}
              with your loved ones or Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste, eveniet. Fugit sed maxime rem eligendi
              autem! Tempore exercitationem at delectus alias. Dicta error
              temporibus exercitationem culpa dignissimos iste aliquam ab.
            </P>
          </ProcessContainer>

          <ImgLeftBottom src={mockUp} alt="choicely mock up on iphones" />
          <ProductContainer>
            <H1>The final Product</H1>
            <H2>Bon Appetit!</H2>
            <P>
              Hungry? Undecided? Lots of time wasted?
              <br /> Sounds familiar, doesn't it? Finding something satisfying
              to eat if you hungry can end up in a <i>
                no-you-decide-game
              </i>{" "}
              with your loved ones or Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium rerum laborum dolores iste fugiat
              dicta aut asperiores, doloribus reprehenderit. Neque velit modi
              sunt vitae temporibus quae, ut quasi cum ullam.
            </P>
          </ProductContainer>
        </CaseStudyContainer>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ParallaxProvider>
  );
};

export default Project1;

// Wrapper.propTypes = {
//   className: PropTypes.string,
// };
