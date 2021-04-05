import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import me from "../images/matthias.png";

const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
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
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 3rem;
  
  
  `};
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
    font-family: "SpaceMonoBold";
    font-size: 4rem;
    text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.4);
  }
  span,
  p {
    margin-top: 1.5rem;
    font-family: "SpaceMonoRegular";
    font-size: 1rem;
  }
  h1,
  span,
  p {
    color: #6fc2a7;
  }
  hr {
    margin-left: 0;
    width: 4rem;
    border: 2px solid var(--main-font-color);
  }
  a {
    text-decoration: none;
    color: var(--main-font-color);
  }
`;

const StyledHeadline = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.dashed-shadow {
    margin: 3rem 0 0 0;
    text-align: center;
    font-size: 14vw;
    letter-spacing: 4vw;
    position: relative;
    top: 18px;
    left: 18px;
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
    top: -18px;
    left: -18px;
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
      <Parallax y={[-10, 30]} x={[-30, 30]}>
        <StyledHeadline className="dashed-shadow" data-text="About">
          About
        </StyledHeadline>
      </Parallax>

      <AboutContainer>
        <img src={me} alt="fa fa-info" />

        <AboutText>
          <h1>Designer & problem solver</h1>
          <hr />
          <span>Hi, I&apos;m Matthias 👋🏻</span>
          <p>
            The last couple of years I asked myself: &quot;Does the job I have
            satisfies me? Do I have growth perspective?&quot; What I realized is
            that the career I was in was not fulfilling those questions.
          </p>
          <p>
            The facts: At that time I had over a decade of experience in retail,
            customer service and management. <br />
            Last year, however, I decided to change careers and started looking
            for possibilities. At the same time I found myself having a passion
            towards Frontend development. And it seems that it also found me.
            How romantic!
          </p>

          <p>
            So, in September 2020 I applied to the Webdeveloper Bootcamp at{" "}
            <a href="https://www.neuefische.de/">
              <i>neue fische School & Pool for Digital Talent</i>
            </a>
            . Even though i had my concerns at the beginning (changing careers
            plays with your self doubts) I felt this is the place where i belong
            doing what I was supposed to do.
          </p>
          <p>
            {" "}
            This was also the first time I got in contact with UX/UI design and
            I was hooked immediatly. Not only opened it the door for me to
            direct my creativity in this field but also I could channel the set
            of skills that enable me to predict what a customer might feel
            attracted to.
          </p>
          <p>
            At the end of 2020 I successfully graduated, developed my own App
            and learned what i want...and what I don&apos;t.
          </p>
        </AboutText>
      </AboutContainer>
    </>
  );
};

export default About;
