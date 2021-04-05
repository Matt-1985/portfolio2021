import React from "react";
import { Link } from "gatsby";
import { Parallax } from "react-scroll-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import Cards from "../components/Card";
import cardImage from "../images/choicely.png";
import kanye from "../images/Kanye_Quotes.png";
import p2020 from "../images/Portfolio_2020.png";
import mtc from "../images/mtc.png";
import responsive from "../commons/Responsive";
// import GatsbyLink from "../commons/Link";

const ProjectWrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  margin: 0;
  transform: skewY(-10deg);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    43deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
  border-bottom-left-radius: 0;
  ${mediaQueries("sm")`
  padding: 0;
  border-radius: 10px;`};
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const HeadlineContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: baseline;
  align-content: flex-start;
  /* justify-content: center;
  align-content: center; */
`;

const StyledHeadline = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.dashed-shadow {
    margin: 0;
    text-align: center;
    font-size: 14vw;
    letter-spacing: 4vw;
    position: relative;
    top: 8px;
    left: 8px;
    display: inline-block;
    color: var(--primary-color);
    ${mediaQueries("sm")`
    font-weight: bold;
  font-size: 3.5rem;
  color: transparent;
  top: -30px;
  
  `};
  }
  :before {
    content: " ";
    display: block;
    position: absolute;
    top: -8px;
    left: -8px;
    bottom: -2px;
    right: -2px;
    z-index: -1;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIxMi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iMTIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIzNy41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjM3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PHN0b3Agb2Zmc2V0PSI2Mi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iNjIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI4Ny41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9Ijg3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
    background-size: 100%;
    background-image: -moz-linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-image: -webkit-linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-image: linear-gradient(
      45deg,
      #ffffff 12.5%,
      rgba(232, 227, 199, 0) 12.5%,
      rgba(232, 227, 199, 0) 37.5%,
      #ffffff 37.5%,
      #ffffff 62.5%,
      rgba(232, 227, 199, 0) 62.5%,
      rgba(232, 227, 199, 0) 87.5%,
      #ffffff 87.5%
    );
    background-size: 6px 6px;
  }
  :after {
    z-index: -2;
    content: attr(data-text);
    position: absolute;
    left: -8px;
    top: -8px;
    color: var(--secondary-font-color);
    text-shadow: 3px 3px #ffffff;
  }
`;

const Projects = () => {
  return (
    <>
      <HeadlineContainer>
        <Parallax className="StyledHeadline" y={[-90, 35]}>
          <StyledHeadline className="dashed-shadow" data-text="Projects">
            Projects
          </StyledHeadline>
        </Parallax>
      </HeadlineContainer>
      <ProjectWrapper>
        <ProjectContainer>
          <Carousel
            responsive={responsive}
            additionalTransform={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass="carousel-item"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <Cards
              src={cardImage}
              alt="app logo"
              headline="choicely"
              p="What do we eat today? The app that helps you decide!"
              href={<Link to="/choicely/">View the case Study</Link>}
            />
            <Cards
              src={p2020}
              alt="app logo"
              headline="Portfolio 2020"
              p="My portfolio with Bootstrap / September 2020"
              href={
                <a href="https://matt-1985.github.io/portfolio1//">
                  TO THE PORTFOLIO
                </a>
              }
            />
            <Cards
              src={kanye}
              alt="app logo"
              headline="Kanye Quotes"
              p="First API connected Application / October 2020 "
              href={
                <a href="https://kanye-quotes.vercel.app/">TO THE PROJECT</a>
              }
            />
            <Cards
              src={mtc}
              alt="app logo"
              headline="More to come"
              p="Currently I am working on another Project...😉 "
              href={<a href="https://choicely.herokuapp.com/">COMING SOON</a>}
            />
          </Carousel>
        </ProjectContainer>
      </ProjectWrapper>
    </>
  );
};

export default Projects;
