import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import styled from "styled-components";

const Bubble1 = styled(animated.div)`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
`;

const VitaContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  transform: skewY(10deg);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
  width: 100%;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    125deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
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
    color: var(--main-font-color);
    text-shadow: 3px 3px #ffffff;
  }
`;

// const Headline = styled.span`
//   position: relative;
//   top: 0;
//   bottom: 2;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
//   text-shadow: 4px 5px 0px rgba(232, 121, 222, 0.88);
// `;

const Vita = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  Vita.propTypes = {
    interpolate: PropTypes.function,
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <>
      <Parallax y={[-40, 50]} x={[60, 50]} tagInner="figure">
        <StyledHeadline className="dashed-shadow" data-text="Vita">
          Vita
        </StyledHeadline>
      </Parallax>

      <VitaContainer>
        <Bubble1
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            // eslint-disable-next-line react/prop-types
            transform: props.xys.interpolate(trans),
          }}
        />
      </VitaContainer>
    </>
  );
};

export default Vita;