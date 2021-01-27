import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";
import { Nav } from "../components/Navigation";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Nav />
        <p>Portfolio</p>
        <a href="www.ps5.de">Test</a>
        <Rectangle />
        <Name />
      </main>
    </>
  );
};

export default IndexPage;
