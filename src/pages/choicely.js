import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "../theme/global-style";
import Navbar from "../components/Navigation";
import Contact from "../components/Contact";
import mockUp from "../images/mockUpChoicely.png";

const Img = styled.img`
  ${mediaQueries("sm")`
  padding: 0;
  height: 100%;
  width: 100%`};
`;

const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(100px, auto);
    margin: 24px;
    max-width: 1000px;
    position: relative;
  }
  &.wrapper > * {
    grid-column: 1 / span 2;
  }
  &.article {
    text-align: right;
  }

  .featured-image-1 {
    grid-row: 2 / 3;
  }

  .number-1 {
    grid-row: 2 / 4;
  }

  .featured-image-2,
  .number-2 {
    grid-row: 4 / 5;
  }

  .number-1,
  .number-4 {
    align-self: end;
    color: rgba(104, 23, 186, 0.5);
    font-family: "Fjalla One", sans-serif;
    font-size: 480px;
    line-height: 480px;
    grid-column: 1 / 2;
  }

  .article-1,
  .article-4 {
    grid-column: 2 / 3;
  }

  .featured-image-2,
  .number-2 {
    align-self: end;
  }

  .number-2 {
    color: #eee;
    font-size: 200px;
    justify-self: end;
    line-height: 160px;
  }

  .number-3 {
    background: black;
    border-radius: 130px;
    color: white;
    font-family: "Fjalla One", sans-serif;
    font-size: 100px;
    height: 130px;
    line-height: 130px;
    position: absolute;
    grid-row: 6 / 7;
    right: -20px;
    text-align: center;
    top: -20px;
    width: 130px;
  }

  .featured-image-3 img {
    height: 100%;
  }

  .number-4 {
    font-size: 320px;
    left: -20px;
    line-height: 320px;
    position: absolute;
  }
  ${mediaQueries("sm")`
  grid-template-columns: repeat(2, 1fr 2fr);
  margin: 24px auto;`};
`;

const Project1 = () => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <main>
        <Navbar />
        <div className="wrapper">
          <figure>
            <Img src={mockUp} alt="choicely mockup"></Img>
          </figure>
          <div className="number-1">1</div>
          <article className="article article-1">
            <h2>Technical information</h2>
            <p>
              In 1985 Aldus Corporation launched its first desktop publishing
              program Aldus PageMaker for Apple Macintosh computers.
            </p>
          </article>
          <figure className="featured-image-2">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/jc-dela-cuesta-311203-sm.jpg"
              alt="Photo by JC Dela Cuesta on Unsplash"
            />
          </figure>
          <div className="number-2">2</div>
          <article className="article article-2">
            <h2>Variants</h2>
            <p>Released in 1987 for PCs running Windows 1.0.</p>
          </article>
          <figure className="featured-image-3">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/seth-doyle-151915-sm.jpg"
              alt="Photo by Seth Doyle on Unsplash"
            />
          </figure>
          <div className="number-3">3</div>
          <article className="article article-3">
            <h2>When not to use it</h2>
            <p>
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread?
            </p>
          </article>
          <figure className="featured-image-4">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/579121/tim-marshall-189232-sm.jpg"
              alt="Photo by Tim Marshall on Unsplash"
            />
          </figure>
          <div className="number-4">4</div>
          <article className="article article-4">
            <h2>So Lorem Ipsum is bad</h2>
            <p>
              One of the villagers, Kristina Halvorson from Adaptive Path, holds
              steadfastly to the notion that design can’t be tested without real
              content.
            </p>
          </article>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ParallaxProvider>
  );
};

export default Project1;

Wrapper.propTypes = {
  className: PropTypes.string,
};
