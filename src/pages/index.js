import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import styled from "styled-components";
import Nav from "../components/Navigation";
import Animation from "../components/AnimationContainer";

const LandingContainer = styled.div``;

const ProjectContainer = styled.div`
  /* grid-area: "project"; */
  background-color: RGBA(12, 104, 255, 0.27);
`;

const VitaContainer = styled.div`
  grid-area: "vita";
  background-color: RGBA(79, 202, 255, 0.27);
`;

const ContactContainer = styled.div`
  grid-area: "contact";
  background-color: RGBA(79, 104, 78, 0.27);
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Nav />
        <section id="home">
          <LandingContainer>
            <Animation />
          </LandingContainer>
        </section>
        <section id="projects">
          <ProjectContainer>
            <a href="#home">UP</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
          </ProjectContainer>
        </section>
        <section id="vita">
          <VitaContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facilis, harum fugiat exercitationem totam magni
              doloremque, saepe quibusdam aut quo deserunt, quia eligendi
              repellat similique. Amet adipisci ipsa quod exercitationem.
            </p>
          </VitaContainer>
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
    </>
  );
};

export default IndexPage;
