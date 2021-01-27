import * as React from "react";
import { GlobalStyle } from "../theme/global-style";
import Rectangle from "../components/Rectangle";
import Name from "../components/Name";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Matthias Rodrigues de França</h1>
        <p>Portfolio</p>
        <a href="www.ps5.de">Test</a>
        <Rectangle />
        <Name />
      </main>
    </>
  );
};

export default IndexPage;
