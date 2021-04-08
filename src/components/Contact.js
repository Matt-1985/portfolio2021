import React from "react";
import { Link } from "gatsby";
import { useDate } from "../commons/useDate";
import { mediaQueries } from "../commons/MediaQueries";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Footer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  /* transform: skewY(-10deg); */
  display: flex;

  justify-content: center;
  align-content: center;
  padding: 2rem;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    45deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  margin: 0 auto;
  /* padding: 0px 1.0875rem; */
  font-size: 16px;
  font-weight: 400;
  ${mediaQueries("sm")`
  flex-direction: column;
  
  `};
`;

const A = styled.a`
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "NimbusRegular";
  font-size: 3em;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255) 0%,
    rgba(255, 255, 255, 68) 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  color: var(--primary-color);
  transition: background-size 0.2s;
  :hover {
    background-size: 4px 50px;
  }
  ${mediaQueries("sm")`
  
  font-size: 1.5rem;
  
  `};
`;

const StyledLink = styled(Link)`
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "NimbusRegular";
  font-size: 3em;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255) 0%,
    rgba(255, 255, 255, 68) 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  color: var(--primary-color);
  transition: background-size 0.2s;
  :hover {
    background-size: 4px 50px;
  }
  ${mediaQueries("sm")`
  
  font-size: 1.5rem;
  
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
  top: 30px;
  left: -30px;
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
    color: #b587e6;
    text-shadow: 3px 3px #ffffff;
  }
`;

const Date = styled.h3`
  flex-direction: flex-end;
  left: 88px;
  top: 17px;
  font-size: 1em;
  font-weight: normal;
  color: rgba(255, 255, 255, 79);
  z-index: 2;
  /* text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.4); */
  text-shadow: 2px -1px 3px rgba(0, 0, 0, 0.48);
`;

export default function Contact() {
  const { date, time } = useDate();

  return (
    <>
      <Parallax y={[20, 15]} tagInner="figure">
        <StyledHeadline className="dashed-shadow" data-text="Contact">
          Contact
        </StyledHeadline>
      </Parallax>
      <Footer>
        <StyledText>
          <A href="https://www.linkedin.com/in/matthias-rodrigues-de-frança">
            linkedin
          </A>

          <A href="mailto:matthias.rodriguesdefranca@gmail.com">email</A>

          <A href="https://github.com/Matt-1985">github</A>

          <StyledLink to="/legal/">legals</StyledLink>
          <Date>
            {date}
            {time}
          </Date>
        </StyledText>
      </Footer>
    </>
  );
}
