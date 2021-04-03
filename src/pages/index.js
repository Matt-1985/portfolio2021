import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import Navbar from "../components/Navigation";
import Landing from "../components/Landing";
import About from "../components/About";
import Vita from "../components/Vita";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <main>
        <Navbar />
        <section id="home">
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="vita">
          <Vita />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ParallaxProvider>
  );
};

export default IndexPage;
