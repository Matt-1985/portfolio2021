import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import me from "../images/matthias.png";

const AboutContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem 6rem;
  z-index: 1;

  img {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    object-position: 10%;
    border: 5px solid #6fc2a7;
    ${mediaQueries("sm")`
  width: 15rem;
    height: 15rem;
    object-fit: cover;
    object-position: 10%;
  `};
  }

  p {
    font-family: "SpaceMonoRegular";
    color: var(--secondary-font-color);
    font-size: 1.5rem;
  }
  ${mediaQueries("sm")`
  
  height: 100vh;
  width: 100vw;
  
  
  `};
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
  top: -20px;
  
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
    color: #6fc2a7;
    text-shadow: 3px 3px #ffffff;
  }
`;

const About = () => {
  return (
    <>
      <Parallax y={[-60, 50]} x={[-30, 50]}>
        <StyledHeadline className="dashed-shadow" data-text="About">
          About
        </StyledHeadline>
      </Parallax>

      <AboutContainer>
        <img src={me} alt="fa fa-info" />
        <p>
          From Print Media Designer to Web Developer? The future is going to be
          digital. We need progress instead of stagnation - Without the leap
          into the digital realm, we will stand still. For me, things no longer
          just have to look good, but also have to function flawlessly. zickzack
          During last couple of years I often asked myself: Is my job right for
          me? Last year decided that time moves on and I have to change
          something. I couldn‘t go on being a Graphic Designer. There had to be
          a chance for a new beginning. Starting in Summer 2020 I attended a
          4-week long workshop at shecodes.io where I learned the basics of
          HTML, CSS and basic Javascript. Afterwards, I wanted to challenge
          myself further: I decided to self-teach myself coding. In autumn I
          attended the Web Developer Bootcamp at neue Fische, which I completed
          in December/January. During this time I found myself enjoying coding a
          lot - it just felt right. I didn‘t only have to produce content which
          looked good, I am now able to produce functional components which do
          the things I tell them to do. pusher tony Mural at Cologne
          EhrenfeldRooftopterrace at Museum Ludwig Apart from working a lot on
          my computer, one of my main interests is music. I enjoy going to
          concerts (hopefully again after corona) and looking for new artists,
          tracks, and genres. A long time ago i even had a blog to write about
          new discoverys. Apart from music I also enjoy other aspects of arts
          and cultur such as visual and performing arts.
        </p>
      </AboutContainer>
    </>
  );
};

export default About;