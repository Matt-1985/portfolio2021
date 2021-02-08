import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import Nav from "../components/Navigation";
import Animation from "../components/AnimationContainer";
import Vita from "../components/Vita";
import Projects from "../components/Projects";

const LandingContainer = styled.div`
  margin: 0;
  ${mediaQueries("sm")`
  width: 100%;
  height: 100%;
  
  `};
`;

const ContactContainer = styled.div`
  grid-area: "contact";
  background-color: RGBA(79, 104, 78, 0.27);
`;

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <main>
        <Nav />
        <section id="home">
          <LandingContainer>
            <Animation />
          </LandingContainer>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="vita">
          <Vita />
        </section>
        <section id="contact">
          <ContactContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
          </ContactContainer>
        </section>
      </main>
    </ParallaxProvider>
  );
};

export default IndexPage;
