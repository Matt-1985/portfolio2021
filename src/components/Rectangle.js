import styled from "styled-components";

const Rectangle = styled.div`
  height: 60vh;
  width: 50vw;
  background-color: var(--highlight-color);
  border: none;
  padding-bottom: (1/1) * 100%;
  position: relative;
  overflow: hidden;
  z-index: 2;
  background-size: cover;
  background-position: center;
`;

export default Rectangle;
