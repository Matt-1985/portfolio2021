import styled from "styled-components";
import { mediaQueries } from "../commons/MediaQueries";

const Rectangle = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  margin: 5% 0 0 30%;
  height: 80vh;
  width: 60vw;
  background-color: var(--highlight-color);
  border: none;
  border-radius: 10px;
  z-index: 2;
  backdrop-filter: blur(1px);
  animation: slide-in-left 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  ${mediaQueries("sm")`
    margin: 5% 0 0 30%;
  height: 13em;
  width: 10em;
  `};
`;

export default Rectangle;
