import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import { Nav } from "../components/Navigation";

const ParallaxContainer = styled.div`
  max-width: 600px;
  margin: auto;
  width: 90%;
  padding: 200px 0px;
  position: relative;
`;

let didScroll = false;
let paralaxTitles = document.querySelectorAll(".Name");

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
    });
    didScroll = false;
  }
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollInProgress);

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Nav />
        <ParallaxContainer>
          <Rectangle />
          <Name />
          <p>Portfolio</p>
        </ParallaxContainer>
      </main>
    </>
  );
};

export default IndexPage;
